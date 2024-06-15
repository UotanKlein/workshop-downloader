import express from 'express';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import Directory from './tree.js';
import prepareAddon from './downloadAddon.js';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const expressPort = 3003;
const webpackPort = 9000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

const dataPath = path.join(__dirname, '/data/addonList.json');

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
        await prepareAddon(link);
        res.status(200).send('Addon successfully downloaded');
    } catch (err) {
        const statusCode = err.statusCode || 500;
        res.status(statusCode).send(JSON.stringify(err));
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'addonMain.html'));
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
