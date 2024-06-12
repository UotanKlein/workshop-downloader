import { Directory, File } from './src/tree.js';

export default async () => {
    const fileList = document.querySelector('.left-aside-file-list');
    new Directory();

    console.log('fs');
};
