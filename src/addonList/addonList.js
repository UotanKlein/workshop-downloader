import axios from 'axios';

const domParser = new DOMParser();

const getAddonData = async () => {
    const dataLink = `/data`;

    try {
        const addonsData = (await axios.get(dataLink)).data;

        return addonsData;
    } catch (error) {
        console.error(`Couldn't get access to the server ${error.message} to link ${dataLink}`);

        return {};
    }
};

const formattedDate = (sec) => {
    const date = new Date(sec * 1000);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

const formAddonBlock = (uniqueId, data, icon, name) => `
    <div class="d-flex addon-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
        <div class="card-box">
            <a href="/addonSite/${uniqueId}" class="custom-card card h-100 link-without">
                <img src="${icon}" class="card-img-top" alt="Addon Image">
                <div class="card-body">
                    <h5 class="card-title text-center">${name}</h5>
                </div>
                <div class="card-footer">
                    <small class="text-body-secondary text-center">Date of creation: ${data}</small>
                </div>
            </a>
            <div class="btn-close-box d-flex justify-content-end">
                <button type="button" class="close-btn btn-close" aria-label="Close"></button>
            </div>
        </div>
    </div>
`;

const app = async () => {
    const addonList = document.getElementById('addon-list');
    const addonJson = await getAddonData();

    addonList.innerHTML = '';

    Object.entries(addonJson).forEach(([uniqueId, val]) => {
        const { id, name, icon, data } = val;
        const createTime = formattedDate(data);

        const element = domParser.parseFromString(formAddonBlock(uniqueId, createTime, icon, name), 'text/html').body.firstChild;

        element.querySelector('.close-btn').addEventListener('click', async (e) => {
            try {
                await axios.delete(`/changeAddon/${uniqueId}`);
                setTimeout(async () => {
                    await app();
                }, 100);
            } catch (err) {
                console.error(err.response.data);
            }
        });

        addonList.appendChild(element);
    });

    const search = document.getElementById('search');
    search.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const children = addonList.children;

        Array.from(children).forEach((child) => {
            if (value === '') {
                child.classList.remove('d-none');
            } else {
                const title = child.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(value)) {
                    child.classList.remove('d-none');
                } else {
                    child.classList.add('d-none');
                }
            }
        });
    });
};

await app();
