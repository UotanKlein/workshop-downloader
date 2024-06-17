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
    textArea.disabled = true;

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

    let currentFilePath = null;

    function renderFS(addon) {
        const ul = document.createElement('ul');

        if (addon.children && addon.children.length !== 0 && Array.isArray(addon.children)) {
            addon.children.forEach((item) => {
                const li = document.createElement('li');

                const button = document.createElement('button');
                button.classList.add('file-system-buttons');
                const span = document.createElement('span');
                const img = document.createElement('img');

                img.src = item.children ? '../images/blueFolder.png' : '../images/blueFile.png';
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
                        child.style.display = child.style.display === 'none' ? 'block' : 'none';
                    });
                    li.appendChild(child);
                } else {
                    button.addEventListener('click', async (event) => {
                        const eventTarget = event.currentTarget.querySelector('span').textContent;
                        const listHead = document.querySelector('.left-aside-filename');
                        try {
                            const postFile = await axios.post(dataLink, {
                                path: item.path,
                            });
                            const textArea = document.querySelector('.main-workspace');
                            if (eventTarget.endsWith('.png')) {
                                textArea.value = '¯_(ツ)_/¯';
                                listHead.textContent = eventTarget;
                            } else {
                                textArea.value = postFile.data;
                                listHead.textContent = eventTarget;
                            }

                            currentFilePath = item.path;
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

    function showMessage(txt) {
        const divShow = document.querySelector('.message');
        divShow.textContent = txt;
        divShow.style.display = 'block';

        setTimeout(() => {
            divShow.style.display = 'none';
        }, 3000);
        console.log('A');
    }

    listAddon.textContent = '';
    listAddon.appendChild(renderFS(mainAddon));

    const test = () => {
        console.log('test');
    };

    const test2 = () => {
        console.log('test2');
    };

    const buttonsForFiles = document.querySelectorAll('.button-for-work-with-files');
    const httpCh = `http://${host}/changeFile/${id}`;
    buttonsForFiles.forEach((button) => {
        button.addEventListener('click', async (event) => {
            const textArea = document.querySelector('.main-workspace');
            if (event.target.classList.contains('change-file')) {
                textArea.disabled = false;
            } else if (event.target.classList.contains('save-file')) {
                textArea.disabled = true;
                try {
                    await axios.post(httpCh, { path: currentFilePath, data: textArea.value }, { timeout: 10000 });
                    showMessage('Файл успешно сохранён');
                } catch (error) {
                    console.error(`Ошибка сохранения ${error.message}`);
                    console.log(error);
                }
            } else if (event.target.classList.contains('select-all')) {
                textArea.select();
            } else if (event.target.classList.contains('copy-all')) {
                try {
                    await navigator.clipboard.writeText(textArea.value);
                } catch (error) {
                    console.error(`Ошибка копирования: ${error.message}`);
                }
            } else if (event.target.classList.contains('delete-file')) {
                try {
                    await axios.delete(httpCh, { data: { path: currentFilePath } });
                    listAddon.textContent = '';
                    const getNewSystem = await axios.get(dataLink);
                    const NewMainAddon = JSON.parse(getNewSystem.data.json);
                    listAddon.appendChild(renderFS(NewMainAddon));
                } catch (error) {
                    console.log(JSON.stringify(error, null, 2));
                    console.error(`Ошибка удаления файла: ${error.message}`);
                }
            }
        });
    });
};

await init();