import axios from 'axios';
import onChange from 'on-change';
import { object, string } from 'yup';
import getAddonId from '../getAddonId.js';
import errors from '../errors.js';
import i18n from 'i18next';
import translations from '../translations.js';
import i18next from 'i18next';

const initI18n = () =>
    i18n.init({
        lng: 'en',
        resources: translations,
        useLocalStorage: true,
        useDataAttrOptions: true,
        interpolation: {
            escapeValue: false,
        },
    });

const domParser = new DOMParser();

const schema = object({
    link: string().url().required(),
});

const createInfo = async () => {
    const info = await axios.get('/getInfo');
    const { gameCount, addonCount } = info.data;

    return `
        <div class="d-flex justify-content-around">
            <div>
                <h5 class="card-title mb-2">${addonCount}</h5>
                <p class="card-text">${i18next.t('infoAddons')}</p>
            </div>
            <div>
                <h5 class="card-title mb-2">${gameCount}</h5>
                <p class="card-text">${i18next.t('infoGames')}</p>
            </div>
        </div>
    `;
};

const app = async () => {
    const state = {
        elements: {
            addonName: document.getElementById('addon-name'),
            addonImage: document.getElementById('addon-image'),
            linkInput: document.getElementById('link-input'),
            linkSubmit: document.getElementById('link-submit'),
            linkForm: document.getElementById('link-box'),
            addonBlock: document.getElementById('addon-block'),
            spinner: document.getElementById('spinner'),
            invalidFeedback: document.getElementById('validation-addon-link'),
            info: document.getElementById('info'),
            support: document.getElementById('support'),
            cardBody: document.getElementById('card-body'),
            inputLabel: document.getElementById('input-label'),
            toAddonList: document.getElementById('to-addon-list'),
        },
        curAddon: {
            title: 'Workshop Downloader',
            image: './images/billy-gif.gif',
            link: '#',
        },
        button: {
            status: false,
        },
        inputValue: '',
        curNav: 'info',
    };

    const changeLang = (lang) => {
        i18next.changeLanguage(lang, () => {
            console.log(state.elements.toAddonList.textContent);
            state.elements.info.textContent = i18next.t('information');
            state.elements.support.textContent = i18next.t('supportProj');
            state.elements.inputLabel.textContent = i18next.t('inputPlaceholder');
            state.elements.toAddonList.textContent = i18next.t('addonList');
            state.elements.linkSubmit.setAttribute('value', i18next.t('downloadButton'));
            console.log(state.elements.toAddonList.textContent);
        });
    };

    changeLang('ru');

    state.elements.cardBody.innerHTML = await createInfo();

    const watchedState = onChange(state, async (path, value, prevVal, applyData) => {
        if (path === 'curAddon.title') {
            state.elements.addonName.textContent = value;
        }

        if (path === 'curAddon.image') {
            state.elements.addonImage.setAttribute('src', value);
        }

        if (path === 'curAddon.link') {
            state.elements.addonBlock.setAttribute('href', value);
        }

        if (path === 'button.status') {
            if (value) {
                state.elements.linkSubmit.classList.remove('disabled');
            } else {
                state.elements.linkSubmit.classList.add('disabled');
            }
        }

        if (path === 'curNav') {
            const preEl = state.elements[prevVal];
            const curEl = state.elements[value];
            const cardBody = state.elements.cardBody;

            preEl.classList.remove('active');
            curEl.classList.add('active');

            if (value === 'info') {
                cardBody.innerHTML = await createInfo();
            } else if (value === 'support') {
                const supportBody = `
                    <h5 class="card-title mb-2">${i18next.t('supportProj')}</h5>
                    <a href="#" class="btn btn-primary">${i18next.t('sendDonation')}</a>
                `;
                cardBody.innerHTML = supportBody;
            }
        }
    });

    state.elements.info.addEventListener('click', (e) => {
        watchedState.curNav = 'info';
    });

    state.elements.support.addEventListener('click', (e) => {
        watchedState.curNav = 'support';
    });

    state.elements.linkInput.addEventListener('input', async (e) => {
        const inputValue = e.target.value;

        watchedState.inputValue = inputValue;

        state.elements.linkInput.classList.remove('is-valid');

        if (inputValue === '') {
            state.elements.linkInput.classList.remove('is-invalid');
            state.elements.linkInput.classList.remove('is-valid');
            watchedState.button.status = false;

            watchedState.curAddon.title = 'Workshop Downloader';
            watchedState.curAddon.image = './images/billy-gif.gif';
            watchedState.curAddon.link = '#';
        } else {
            try {
                await schema.validate({ link: inputValue });

                const addonId = getAddonId(inputValue);

                if (addonId === undefined) {
                    throw new Error('The link does not have a parameter ID');
                }

                const addonData = (await axios.get(`/addonInfo/${addonId}`)).data;

                if (addonData.result === 9) {
                    throw new errors.AddonNotFoundError();
                }

                const addonTitle = addonData.title;
                const addonImg = addonData.preview_url;

                watchedState.curAddon.title = addonTitle;
                watchedState.curAddon.image = addonImg;
                watchedState.curAddon.link = inputValue;

                state.elements.linkInput.classList.remove('is-invalid');

                watchedState.button.status = true;
            } catch (err) {
                state.elements.linkInput.classList.remove('is-valid');
                state.elements.linkInput.classList.add('is-invalid');
                watchedState.button.status = false;
                watchedState.curAddon.title = 'Workshop Downloader';
                watchedState.curAddon.image = './images/billy-gif.gif';
                watchedState.curAddon.link = '#';
            }
        }
    });

    state.elements.linkForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!watchedState.button.status) {
            return;
        }

        state.elements.linkInput.classList.remove('is-invalid');
        state.elements.linkInput.classList.remove('is-valid');

        const value = watchedState.inputValue;
        const addonId = getAddonId(value);

        try {
            state.elements.spinner.classList.remove('d-none');

            const { status, data } = await axios.post('/downloadAddon', {
                link: value,
            });
            const { id, message } = data;

            state.elements.invalidFeedback.textContent = message;
            watchedState.curAddon.link = `/addonSite/${id}`;
            state.elements.linkInput.classList.remove('is-invalid');
            state.elements.linkInput.classList.add('is-valid');
            state.elements.spinner.classList.add('d-none');

            if (watchedState.curNav === 'info') {
                state.elements.cardBody.innerHTML = await createInfo();
            }
        } catch (err) {
            const resErr = err.response.data;

            state.elements.invalidFeedback.textContent = resErr.text;

            state.elements.linkInput.classList.remove('is-valid');
            state.elements.linkInput.classList.add('is-invalid');
            state.elements.spinner.classList.add('d-none');
        }
    });
};

await initI18n();
await app();
