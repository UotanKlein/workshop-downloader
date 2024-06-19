import express from 'express';
import fs from 'fs';
import fsp from 'fs/promises';
import { isFile, isDir, checkExists } from './fileSystem.js';
import getAddonInfo from './getAddonInfo.js';
import gameList from './gameList.js';
import path from 'path';
import { fileURLToPath } from 'url';

import cors from 'cors';
import Directory from './tree.js';
import prepareAddon from './prepareAddon.js';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const expressPort = 80;

const startServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '../dist')));

    const dataPath = path.join(__dirname, '/data/addonList.json');

    app.get('/addonInfo/:id', async (req, res) => {
        const addonId = req.params.id;

        if (addonId === undefined) {
            throw new Error('The link does not have a parameter ID');
        }

        try {
            const addonData = await getAddonInfo(addonId);
            res.status(200).send(addonData[0]);
        } catch (err) {
            res.status(404).send(err);
        }
    });

    // Получение данных из JSON файла
    app.get('/data', (req, res) => {
        fs.readFile(dataPath, (err, data) => {
            if (err) {
                res.status(500).send('Ошибка при чтении файла');
            } else {
                res.send(JSON.parse(data));
            }
        });
    });

    app.post('/downloadAddon', async (req, res) => {
        const link = req.body.link;

        if (!link) {
            return res.status(400).send('Link is required');
        }

        try {
            const id = await prepareAddon(link);
            res.status(200).send({ id, message: 'Addon successfully downloaded' });
        } catch (err) {
            const statusCode = err.statusCode || 500;
            res.status(statusCode).send(err);
        }
    });

    app.get('/dataAddon/:id', async (req, res) => {
        const id = req.params.id;
        const addonsData = JSON.parse(fs.readFileSync('./src/data/addonList.json'));
        const addonData = addonsData[id];

        if (!addonData) {
            res.status(404).send('Аддон не найден');
            return;
        }

        const addonDataPath = addonData.path;
        const dirClass = new Directory(path.resolve(addonDataPath));
        const loadChilds = (await dirClass.loadChildren()).toString();

        res.send({ name: addonData.name, json: loadChilds });
    });

    app.delete('/changeAddon/:id', async (req, res) => {
        const id = req.params.id;
        const addonsData = JSON.parse(await fsp.readFile('./src/data/addonList.json', 'utf-8'));

        if (!addonsData[id]) {
            res.status(404).send('Аддон не найден');
            return;
        }

        try {
            const addonPath = addonsData[id].path;
            await fsp.rm(addonPath, { recursive: true, force: true });
            delete addonsData[id];
            await fsp.writeFile('./src/data/addonList.json', JSON.stringify(addonsData, null, 2));
            res.status(200).send('Аддон удален');
        } catch (err) {
            res.status(500).send(err);
        }
    });
    
    app.post('/dataAddon/:id', async (req, res) => {
        const pathToFile = req.body.path;
        try {
            if (pathToFile.endsWith('.png')) {
                const readPng = await fsp.readFile(pathToFile);
                res.writeHead(200, { 'Content-type': 'image/png' });
                res.end(readPng, 'binary');
            } else {
                const readFile = await fsp.readFile(pathToFile, 'utf-8');
                res.send(readFile);
            }
        } catch (error) {
            console.error(`Ошибка чтения: ${error.message}}`);
        }
    });

    app.post('/changeFile/:id', async (req, res) => {
        // новый путь для кнопок обрабатывающих файлы
        const path = req.body.path;
        const changedData = req.body.data;
        if (!path.endsWith('.png') && fs.lstatSync(path).isFile()) {
            try {
                await fsp.writeFile(path, changedData, 'utf-8');
                res.status(200).send(``);
            } catch (error) {
                console.error(`Ошибка записи: ${error.message}}`);
                res.status(500).send(`Ошибка записи: ${error.message}`);
            }
        }
    });

    app.delete('/changeFile/:id', async (req, res) => {
        //удаление
        const pathToDelete = req.body.path;
        try {
            await fsp.unlink(pathToDelete);
            res.status(200).send('');
        } catch (error) {
            res.status(500).send(`Ошибка удаления файла: ${error.message}`);
        }
    });

    app.get('/download-zip/:id', (req, res) => {
        const id = req.params.id;

        const addonsData = JSON.parse(fs.readFileSync('./src/data/addonList.json'));
        const addonData = addonsData[id];

        if (!addonData) {
            res.status(404).send('Аддон не найден');
            return;
        }

        const addonDataPath = addonData.path;
        const zips = path.resolve('./src/zips');
        const outputPath = path.join(zips, `${id}.zip`);

        const output = fs.createWriteStream(outputPath);
        const archive = archiver('zip', {
            zlib: { level: 9 },
        });

        output.on('close', () => {
            console.log(`Archive created with ${archive.pointer()} total bytes`);

            res.download(outputPath, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                }
                fs.unlinkSync(outputPath);
            });
        });

        archive.on('error', (err) => {
            throw err;
        });

        archive.pipe(output);
        archive.directory(addonDataPath, false);
        archive.finalize();
    });

    app.get('/getInfo', (req, res) => {
        const addonsData = JSON.parse(fs.readFileSync('./src/data/addonList.json'));

        const gameCount = Object.keys(gameList).length;
        const addonCount = Object.keys(addonsData).length;

        res.status(200).send({
            gameCount,
            addonCount,
        });
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

    app.get('/addonList', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'addonList.html'));
    });

    app.get('/addonSite/:id', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist', 'addonSite.html'));
    });

    app.listen(expressPort, () => {
        console.log(`Сервер запущен на http://localhost:${expressPort}`);
    });
};

export default startServer;
