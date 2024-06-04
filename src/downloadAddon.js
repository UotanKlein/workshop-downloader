import SteamWorkshop from 'steam-workshop';
import path from 'path';
import { spawn } from 'child_process';
import fsp from 'fs/promises';
import gameList from './gameList.js';
import addonList from './addonList.js';
import { isFile, isDir, checkExists } from './fileSystem.js';
import { fileURLToPath } from 'url';
import users from './usersData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curPath = path.resolve(__dirname, '..');

const steamcmdPath = path.join(curPath, 'steamcmd/steamcmd.exe');
const addonsDir = path.join(curPath, 'addons');
const steamContentDir = path.join(
    curPath,
    `steamcmd/steamapps/workshop/content`,
);

const getAddonInfo = async (addonId) => {
    try {
        return await new Promise((resolve, reject) => {
            const workshop = new SteamWorkshop();
            workshop.getPublishedFileDetails(addonId, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    } catch (err) {
        console.error(err);
        return;
    }
};

const getAddonId = (link) => new URL(link).searchParams.get('id');

const moveAddon = async (oldPath, newPath) => {
    await fsp.rename(oldPath, newPath);
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

const downloadAddon = (gameId, addonId, requireLogin, cb = async () => {}) => {
    let steamcmdCommands;

    if (requireLogin) {
        const tblUsrData = getLoginData();
        steamcmdCommands = [
            '+login',
            tblUsrData.login,
            tblUsrData.password,
            '+workshop_download_item',
            gameId,
            addonId,
            '+quit',
        ];
    } else {
        steamcmdCommands = [
            '+login',
            'anonymous',
            '+workshop_download_item',
            gameId,
            addonId,
            '+quit',
        ];
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

    executeCommand(steamcmdPath, steamcmdCommands)
        .then(async (code) => {
            console.log(`Child process exited with code ${code}`);
            await cb(null, code);
        })
        .catch(async (error) => {
            console.error(`Error: ${error.message}`);
            await cb(error);
        });
};

const prepareAddon = async (link) => {
    const addonId = getAddonId(link);
    const addonInfo = await getAddonInfo(addonId);

    const gameId = addonInfo[0].creator_app_id.toString();
    const addonName = addonInfo[0].title;
    const addonIcon = addonInfo[0].preview_url;

    const app = gameList[gameId];

    if (
        !app ||
        !(await checkExists(steamcmdPath)) ||
        !(await isFile(steamcmdPath)) ||
        !(await checkExists(addonsDir)) ||
        !(await isDir(addonsDir)) ||
        (await checkExists(path.join(addonsDir, gameId, addonId)))
    ) {
        console.error('Invalid setup or addon already exists');
        return;
    }

    downloadAddon(gameId, addonId, app.requireLogin, async (err, code) => {
        if (!err && code === 0) {
            console.log('Addon successfully downloaded');

            const addonDir = path.join(steamContentDir, gameId, addonId);
            const destinationDir = path.join(addonsDir, gameId);

            try {
                if (!(await checkExists(addonDir))) {
                    console.error(`Addon directory not found at ${addonDir}`);
                    return;
                }

                const newPathAddon = path.join(destinationDir, addonId);
                await fsp.mkdir(destinationDir, { recursive: true });
                await moveAddon(addonDir, newPathAddon);

                if (app.decompileFunc) {
                    await app.decompileFunc(path.join(destinationDir, addonId));
                }

                addonList.addAddon(
                    addonId,
                    gameId,
                    addonName,
                    addonIcon,
                    newPathAddon,
                );
                await addonList.saveList();
                console.log('Directory successfully moved.');
            } catch (err) {
                console.error('Error moving directory:', err);
            }
        } else {
            console.error(`Error downloading addon: exit code ${code}`);
        }
    });
};

await prepareAddon(
    'https://steamcommunity.com/sharedfiles/filedetails/?id=2841063827',
);

export default prepareAddon;
