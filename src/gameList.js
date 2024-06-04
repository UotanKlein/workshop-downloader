import { gmod } from './decompilers.js';

// FIXME: Решить проблему с авторизацией SteamCMD и отсутствием игр в Steam.
// Если игры нет в библиотеке Steam, то даже при авторизации SteamCMD не позволяет загружать аддоны.

// TODO: Добавить поддержку 10 игр.

const gameList = {
    4000: {
        game: "Garry's Mod",
        decompileFunc: gmod,
        requireLogin: false,
    },
    236850: {
        game: 'Europa Universalis IV',
        decompileFunc: null,
        requireLogin: true,
    },
};

export default gameList;
