import fs from 'fs/promises';

const isFile = async (filePath) => {
    try {
        const stats = await fs.stat(filePath);
        return stats.isFile();
    } catch (err) {
        console.error(`Error checking type of ${filePath}: ${err}`);
        return false;
    }
};

const isDir = async (dirPath) => {
    try {
        const stats = await fs.stat(dirPath);
        return stats.isDirectory();
    } catch (err) {
        console.error(`Error checking type of ${dirPath}: ${err}`);
        return false;
    }
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
