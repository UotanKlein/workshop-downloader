import { Directory, File } from "./src/tree.js";

export default async() => {
    const fileList = document.querySelector('.left-aside-file-list');
    fileList.textContent = '';
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'fs';
    ul.appendChild(li);
    fileList.appendChild(ul);
    
    console.log('fs');
}