import path from 'path';
import { spawn } from 'child_process';
import fsp from 'fs/promises';
import gameList from './gameList.js';
import addonList from './addonList.js';
import { isFile, isDir, checkExists } from './fileSystem.js';
import getAddonInfo from './getAddonInfo.js';
import getAddonId from './getAddonId.js';
import { fileURLToPath } from 'url';
import users from './usersData.js';
import errors from './errors.js';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curPath = path.resolve(__dirname, '..');

const addonsDir = path.join(curPath, 'addons');
const downloadDir = path.join(curPath, 'temp');

const steamContentDir = path.join(curPath, `steamcmd/steamapps/workshop/content`);

const moveAddon = async (oldPath, newPath) => {
    try {
        await fsp.rename(oldPath, newPath);
    } catch (e) {
        console.error(e);
    }
};

let currentUser = 0;

const getLoginData = () => {
    const user = users[currentUser];
    currentUser += 1;
    if (currentUser >= users.length) {
        currentUser = 0;
    }

    return user;
};

// FIXME: Решить проблему парарлелльной загрузки аддонов.

const downloadAddon = (gameId, addonId, requireLogin) => new Promise((resolve, reject) => {
    let steamcmdCommands;
    if (requireLogin) {
        const tblUsrData = getLoginData();
        steamcmdCommands = ['+login', tblUsrData.login, tblUsrData.password, '+workshop_download_item', gameId, addonId, '+quit'];
    } else {
        steamcmdCommands = ['+force_install_dir', downloadDir, '+login', 'anonymous', '+workshop_download_item', gameId, addonId, '+quit'];
    }

    const executeCommand = (command, args) => {
        return new Promise((resolve, reject) => {
            const cmd = spawn(command, args);

            cmd.stdout.on('data', (data) => {
                console.log(`stdout: ${data.toString()}`);
            });

            cmd.stderr.on('data', (data) => {
                console.error(`stderr: ${data.toString()}`);
            });

            cmd.on('close', (code) => {
                if (code === 0) {
                    resolve(code);
                } else {
                    reject(new Error(`Process exited with code ${code}`));
                }
            });
        });
    };

    executeCommand('steamcmd', steamcmdCommands)
        .then((code) => resolve(code))
        .catch((error) => reject(error));
});

const pathToLinux = (oldPath) => oldPath.split(path.sep).join('/');

const getUniqueId = async () => {
    const keys = Object.keys(JSON.parse(await fsp.readFile('./src/data/addonList.json', 'utf-8')));
    let id = 0;

    while (keys.includes(id.toString())) {
        id += 1;
    }

    return id.toString();
};

// https://steamcommunity.com/sharedfiles/filedetails/?id=264467687

const prepareAddon = async (link) => {
    const addonId = getAddonId(link);
    let addonInfo;

    try {
        addonInfo = await getAddonInfo(addonId);
    } catch (err) {
        throw err;
    }

    const gameId = addonInfo[0].creator_app_id.toString();
    const addonName = addonInfo[0].title;
    const addonIcon = addonInfo[0].preview_url;
    const addonData = addonInfo[0].time_created;

    const app = gameList[gameId];
    if (!app) {
        throw new errors.GameNotSupportedError();
    }

    try {
        if (!(await checkExists(addonsDir)) || !(await isDir(addonsDir))) {
            throw new Error('Необходимые файлы или каталоги отсутствуют.');
        }

        if (await checkExists(path.join(addonsDir, gameId, addonId))) {
            throw new errors.AddonAlreadyExistsError();
        }

        await downloadAddon(gameId, addonId, app.requireLogin);

        console.log('Addon successfully downloaded');

        const uniqueId = await getUniqueId();
        const addonDir = path.join(downloadDir, 'steamapps', 'workshop', 'content', gameId, addonId);
        const newPathAddon = path.join(addonsDir, uniqueId);

        console.log(`Aboba, chel, kak delaaaa: ${addonDir}`);

        if (!(await checkExists(addonDir))) {
            throw new Error(`Directory of addon not found at ${addonDir}`);
        }

        await moveAddon(addonDir, newPathAddon);

        if (app.decompileFunc) {
            await app.decompileFunc(newPathAddon);
        }

        const linuxPath = pathToLinux(path.join('addons', uniqueId));

        addonList.addAddon(uniqueId, addonId, gameId, addonName, addonIcon, linuxPath, addonData);
        await addonList.saveList();
        console.log('Directory successfully moved.');
        return uniqueId;
    } catch (err) {
        throw err;
    }
};

export default prepareAddon;

// [
//     {
//       "publishedfileid": "3024317004",
//       "result": 1,
//       "creator": "76561198229921180",
//       "creator_app_id": 4000,
//       "consumer_app_id": 4000,
//       "filename": "",
//       "file_size": "143037",
//       "file_url": "",
//       "hcontent_file": "3464215742853616018",
//       "preview_url": "https://steamuserimages-a.akamaihd.net/ugc/2019355280651905872/3FDCE3BBC595601BBA1A08B3E37D353A52A6152D/",
//       "hcontent_preview": "2019355280651905872",
//       "title": "GMinimap",
//       "description": "[i]I'm, lost, could ya give me some directions?[/i]\r\n[hr][/hr]\r\nA customizable minimap for your game HUD.\r\n\r\n[list]\r\n\t[*] Customizable position, size, health/armor, colors and other goodies\r\n\t[*] Bookmark your favorite locations with custom blips\r\n\t[*] Shows other players nearby\r\n\t[*] Shows the map terrain\r\n\t[*] [i](For developers)[/i] Supports custom blips and custom icons (including direct links to images on the internet)\r\n\t[*] [i](For servers)[/i] Console commands and Lua functions are available to make this addon fit your needs (See the [url=https://github.com/StyledStrike/gmod-gminimap]GitHub page[/url])\r\n[/list]\r\n\r\n[i]Tip: You can find options to configure it on the [b]Spawn Menu (hold Q) > Utilities tab > GMinimap > Configure[/b][/i]\r\n[img]https://i.imgur.com/A1B3jDf.jpg[/img]\r\n\r\n[i]Tip: You can also open the config and landmarks with the console commands [b]gminimap_config[/b] and [b]gminimap_landmarks[/b] respectively[/i]",
//       "time_created": 1692743805,
//       "time_updated": 1702082561,
//       "visibility": 0,
//       "banned": 0,
//       "ban_reason": "",
//       "subscriptions": 58355,
//       "favorited": 8367,
//       "lifetime_subscriptions": 111089,
//       "lifetime_favorited": 8922,
//       "views": 150691,
//       "tags": [
//         {
//           "tag": "Addon"
//         },
//         {
//           "tag": "Fun"
//         },
//         {
//           "tag": "Realism"
//         },
//         {
//           "tag": "ServerContent"
//         }
//       ]
//     }
// ]
