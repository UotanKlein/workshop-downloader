import axios from 'axios';

const init = async () => {

    window.onload = function() {
        const textArea = document.querySelector('.main-workspace');
        textArea.value = '';
    }

    const dataLink = 'http://localhost:3002/dataAddon';
    const gett = await axios.get(dataLink);

    console.log(JSON.parse(gett.data.json));

    const mainAddon = JSON.parse(gett.data.json);

    const addonName = gett.data.name;
    const addonPosition = document.querySelector('.main-header');
    addonPosition.textContent = addonName;

    const listAddon = document.querySelector('.left-aside-file-list');

    function renderFS(addon) {
        const ul = document.createElement('ul');
        
        if (addon.children && addon.children.length !== 0 && Array.isArray(addon.children)) {
            addon.children.forEach((item) => {
            const li = document.createElement('li');
            
            const button = document.createElement('button');
            button.classList.add('file-system-buttons');
            const span = document.createElement('span');
            const img = document.createElement('img');

            img.src = item.children ? './images/blueFolder.png' : './images/blueFile.png';
            img.style.height = '16px';
            img.style.width = '16px';
            span.textContent = item.name;
            button.appendChild(img);
            button.appendChild(span);
            li.appendChild(button);

            if (item.children && item.children.length!== 0) {
                const child = renderFS(item);
                child.style.display = 'none';
                button.addEventListener('click', () => {
                    child.style.display = child.style.display === 'none'? 'block' : 'none';
                });
                li.appendChild(child);
            } else {
                button.addEventListener('click', async (event) => { 
                    const eventTarget = event.currentTarget.querySelector('span').textContent;
                    const listHead = document.querySelector('.left-aside-filename');
                    try {
                        const postFile = await axios.post('http://localhost:3002/dataAddon', { path: item.path });
                        const textArea = document.querySelector('.main-workspace');
                        if (eventTarget.endsWith('.png')) {
                           
                            textArea.value = '¯\_(ツ)_/¯'
                            listHead.textContent = eventTarget;
                        } else {
                            textArea.value = postFile.data;
                            listHead.textContent = eventTarget;
                        }
                    } catch (error) {
                        console.error(`Ошибка: ${error.message}`);
                    }
                });
            }
            ul.appendChild(li);
            })

        }

        return ul;
    }

    listAddon.textContent = '';
    listAddon.appendChild(renderFS(mainAddon));
}

await init();

