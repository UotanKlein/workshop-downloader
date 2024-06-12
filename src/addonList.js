import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AddonList {
    constructor() {
        this.json = path.join(__dirname, 'data/addonList.json');
        this.addonList = {};
    }

    addAddon(id, game, name, icon, addonPath, data) {
        this.addonList[id] = { id, game, name, icon, path: addonPath, data };
    }

    removeAddon(id) {
        delete this.addonList[id];
    }

    async saveList() {
        try {
            await fs.writeFile(
                this.json,
                JSON.stringify(this.addonList, null, 2),
            );
        } catch (err) {
            console.error(err);
        }
    }
}

const list = new AddonList();

export default list;
