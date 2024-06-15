import axios from 'axios';

const location = window.location;
const pathname = location.pathname;
const host = location.host;
const parts = pathname.split('/');
const id = parts[parts.length - 1];
const dataLink = `http://${host}/dataAddon/${id}`;

window.onload = function () {
    const textArea = document.querySelector('.main-workspace');
    textArea.value = '';

    const goBack = document.querySelector('.go-back');
    const goAddonList = document.querySelector('.go-addonList');

    goBack.setAttribute('href', `http://${host}`);
    goAddonList.setAttribute('href', `http://${host}/addonList`);
};

async function downloadZip(id) {
    const response = await fetch(`/download-zip/${id}`);
    if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${id}.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    } else {
        alert('Failed to download zip file');
    }
}

const init = async () => {
    const gett = await axios.get(dataLink);
    const mainAddon = JSON.parse(gett.data.json);
    const addonName = gett.data.name;
    const addonPosition = document.querySelector('.main-header');
    addonPosition.textContent = addonName;

    const listAddon = document.querySelector('.left-aside-file-list');
    const downloadAll = document.querySelector('.right-aside-downloader-all');

    downloadAll.addEventListener('click', async () => {
        await downloadZip(id);
    });

    function renderFS(addon) {
        const ul = document.createElement('ul');

        if (
            addon.children &&
            addon.children.length !== 0 &&
            Array.isArray(addon.children)
        ) {
            addon.children.forEach((item) => {
                const li = document.createElement('li');

                const button = document.createElement('button');
                button.classList.add('file-system-buttons');
                const span = document.createElement('span');
                const img = document.createElement('img');

                img.src = item.children
                    ? '../images/blueFolder.png'
                    : '../images/blueFile.png';
                img.style.height = '16px';
                img.style.width = '16px';
                span.textContent = item.name;
                button.appendChild(img);
                button.appendChild(span);
                li.appendChild(button);

                if (item.children && item.children.length !== 0) {
                    const child = renderFS(item);
                    child.style.display = 'none';
                    button.addEventListener('click', () => {
                        child.style.display =
                            child.style.display === 'none' ? 'block' : 'none';
                    });
                    li.appendChild(child);
                } else {
                    button.addEventListener('click', async (event) => {
                        const eventTarget =
                            event.currentTarget.querySelector(
                                'span',
                            ).textContent;
                        const listHead = document.querySelector(
                            '.left-aside-filename',
                        );
                        try {
                            const postFile = await axios.post(dataLink, {
                                path: item.path,
                            });
                            const textArea =
                                document.querySelector('.main-workspace');
                            if (eventTarget.endsWith('.png')) {
                                textArea.value = '¯_(ツ)_/¯';
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
            });
        }

        return ul;
    }

    listAddon.textContent = '';
    listAddon.appendChild(renderFS(mainAddon));
};

await init();
