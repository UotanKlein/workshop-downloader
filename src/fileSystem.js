import fs from 'fs/promises';
import path from 'path';

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

class SuperNode {
    constructor(name, path, parent) {
        this.name = name;
        this.path = path;
        this.parent = parent;

        this.init();
    }

    async init() {
        if (await isFile(this.path)) {
            this.type = 'file';
        } else if (await isDir(this.path)) {
            this.type = 'directory';
        }
    }

    getName() {
        return this.name;
    }

    getPath() {
        return this.path;
    }

    getParent() {
        return this.parent;
    }

    toString(tab = 2) {
        let info = `${' '.repeat(tab)}Name: ${this.name}\n${' '.repeat(
            tab,
        )}Path: ${this.path}\n${' '.repeat(tab)}Type: ${
            this.type
        }\n${' '.repeat(tab)}Parent: ${
            this.parent ? this.parent.getName() : null
        }`;
        if (this.children) {
            info = `${info}\n${' '.repeat(
                tab,
            )}Content: {\n${this.children.reduce((acc, cur) => {
                return `${acc}${cur.toString(tab + 2)}`;
            }, '')}\n${' '.repeat(tab)}}`;
        }

        return `${info}\n`;
    }
}

class Node extends SuperNode {
    constructor(name, path, parent) {
        super(name, path, parent);
        this.children = [];
    }

    setChildren(child) {
        this.children = child;
    }

    getChildren() {
        return this.children;
    }
}

class Leaf extends SuperNode {
    constructor(name, path, parent, extname) {
        super(name, path, parent);
        this.extname = extname;
    }

    getExtname() {
        return this.extname;
    }
}

export { isFile, isDir, checkExists };
