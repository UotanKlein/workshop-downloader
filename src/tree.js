import fs from 'fs/promises';
import path from 'path';

class File {
    constructor(name, parent = null) {
      this.name = name;
      this.parent = parent;
      this.path = parent ? path.join(parent.path, name) : name;
      this.type = 'file';
    }

    toString() {
      return JSON.stringify(this, (key, value) => {
        if (key === 'parent' && value) {
            return value.path;
        }
        return value;
      }, 2);
    }
}

class Directory {
    constructor(name, parent = null) {
        this.name = path.basename(name);
        this.parent = parent;
        this.path = parent ? path.join(parent.path, name) : name;
        this.type = 'directory';
        this.children = [];
    }

    async loadChildren() {
        const childrenNames = await fs.readdir(this.path);
        this.children = await Promise.all(
            childrenNames.map(async (childName) => {
                const childPath = path.join(this.path, childName);
                if ((await fs.lstat(childPath)).isDirectory()) {
                    const newDirec = new Directory(childName, this);
                    await newDirec.loadChildren();
                    return newDirec;
                } else {
                    return new File(childName, this);
                }
            }),
        );
        return this.children;
    }

    getChildren(name) {
      const child = this.children.find((ch) => ch.name === name);
      if (!child) {
        throw new Error('No such');
      }
      if (child.type !== 'directory') {
        throw new Error(`${name} not directory`);
      }
      return child;
    }

    getParent() {
      if (!this.parent) {
        throw new Error('Cannot go back');
      }
      return this.parent;
    }

    toString() {
      return JSON.stringify(this, (key, value) => {
        if (key === 'parent' && value) {
            return value.path;
        }
        return value;
      }, 2);
    }
}

export default Directory;