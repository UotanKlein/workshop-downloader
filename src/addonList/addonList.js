import axios from 'axios';

const location = window.location;
const host = location.host;

window.onload = () => {
    const addonMainLink = `http://${host}`;
    const addonMain = document.querySelector('.site-name');

    addonMain.setAttribute('href', addonMainLink);
};

const getAddonData = async () => {
    const dataLink = `http://${host}/data`;

    try {
        const addonsData = (await axios.get(dataLink)).data;

        return addonsData;
    } catch (error) {
        console.error(
            `Couldn't get access to the server ${error.message} to link ${dataLink}`,
        );

        return {};
    }
};

const formattedDate = (sec) => {
    const date = new Date(sec * 1000);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
        .getHours()
        .toString()
        .padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

const formAddonBlock = (dataLink, data, icon, name) => `
    <a
        class="addon-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 link-without"
        href="${dataLink}"
    >
        <div class="addon-date">
            <p class="mg-0 main-font">${data}</p>
        </div>
        <div class="addon-image">
            <img
                class="addon-img img-fluid"
                src="${icon}"
                alt="test-image-addon"
            />
        </div>
        <div class="addon-name">
            <p class="mg-0 main-font">${name}</p>
        </div>
    </a>
`;

const app = async () => {
    const addonList = document.getElementById('addon-list');

    const addonJson = await getAddonData();
    const domParser = new DOMParser();

    Object.entries(addonJson).forEach(([id, val]) => {
        const { name, icon, data } = val;
        const dataLink = `http://${host}/addonSite/${id}`;
        const createTime = formattedDate(data);

        const element = domParser.parseFromString(
            formAddonBlock(dataLink, createTime, icon, name),
            'text/html',
        ).body.firstChild;

        addonList.appendChild(element);
    });
};

await app();
