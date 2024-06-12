import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import Directory from './tree.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const expressPort = 3000;
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

// Сохранение данных в JSON файл
app.post('/data', (req, res) => {
    const newData = req.body;
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            res.status(500).send('Ошибка при чтении файла');
        } else {
            const jsonData = JSON.parse(data);
            jsonData.push(newData);
            fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Ошибка при записи файла');
                } else {
                    res.send('Данные сохранены');
                }
            });
        }
    });
});

app.get('/dataAddon', async (req, res) => {
    const newPath = path.resolve('./src');

    const dirClass = new Directory(newPath);

    const loadChilds = await dirClass.loadChildren();

    res.send(loadChilds.toString());
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'addonList.html'));
});

// Настройка маршрутов для других HTML файлов
app.get('/addonList', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'addonList.html'));
});

app.get('/addonSite', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'addonSite.html'));
});

app.listen(expressPort, () => {
    console.log(`Сервер запущен на http://localhost:${expressPort}`);
});
