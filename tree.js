import fs from 'fs';
import path from'path';
import * as flatted from 'flatted';

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
      this.children = this.loadChildren();
    }
  
    loadChildren() {
      const childrenNames = fs.readdirSync(this.path);
      return childrenNames.map((childName) => {
        const childPath = path.join(this.path, childName);
        if (fs.lstatSync(childPath).isDirectory()) {
          return new Directory(childName, this);
        } else {
          return new File(childName, this);
        }
      });
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

const rootDir = new Directory('/home/nikita/company-work/src'); 
console.log(rootDir.toString());