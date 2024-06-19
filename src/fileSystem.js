import fs from 'fs/promises';

const checkPathType = async (path, typeCheck) => {
    try {
        const stats = await fs.stat(path);
        return stats[typeCheck]();
    } catch (err) {
        return false;
    }
};

const isFile = async (filePath) => {
    return checkPathType(filePath, 'isFile');
};

const isDir = async (dirPath) => {
    return checkPathType(dirPath, 'isDirectory');
};

const checkExists = async (pathToCheck) => {
    try {
        await fs.access(pathToCheck);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        } else {
            console.error(`Error checking existence of ${pathToCheck}: ${err}`);
            return false;
        }
    }
};

export { isFile, isDir, checkExists };
