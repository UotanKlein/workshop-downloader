import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AddonList {
    constructor() {
        const dataDirPath = path.resolve(__dirname, 'data');
        const dataPath = path.join(dataDirPath, 'addonList.json');

        if (!fs.existsSync(dataPath)) {
            fs.mkdirSync(dataDirPath, { recursive: true });
            fs.writeFileSync(path.join(dataPath, 'addonList.json'), '{}');
        }

        this.json = dataPath;
        this.addonList = JSON.parse(fs.readFileSync(this.json, 'utf8'));
    }

    addAddon(id, game, name, icon, addonPath, data) {
        this.addonList[id] = { id, game, name, icon, path: addonPath, data };
    }

    removeAddon(id) {
        delete this.addonList[id];
    }

    async saveList() {
        try {
            await fsp.writeFile(this.json, JSON.stringify(this.addonList, null, 2));
        } catch (err) {
            console.error(err);
        }
    }
}

const list = new AddonList();

export default list;
