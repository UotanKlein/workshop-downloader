import axios from 'axios';
import onChange from 'on-change';
import { object, string } from 'yup';
import getAddonId from '../getAddonId.js';
import errors from '../errors.js';
import { domEach } from 'cheerio/lib/utils';

const domParser = new DOMParser();

const schema = object({
    link: string().url().required(),
});

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
    };

    const watchedState = onChange(state, (path, value, prevVal, applyData) => {
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

        const value = watchedState.inputValue;
        const addonId = getAddonId(value);

        try {
            state.elements.spinner.classList.remove('d-none');

            const { status, data } = await axios.post('/downloadAddon', {
                link: value,
            });

            state.elements.invalidFeedback.textContent = data;
            watchedState.curAddon.link = `/addonSite/${addonId}`;

            state.elements.linkInput.classList.remove('is-invalid');
            state.elements.linkInput.classList.add('is-valid');

            state.elements.spinner.classList.add('d-none');
        } catch (err) {
            const resErr = err.response.data;

            state.elements.invalidFeedback.textContent = resErr.text;

            state.elements.linkInput.classList.remove('is-valid');
            state.elements.linkInput.classList.add('is-invalid');
            state.elements.spinner.classList.add('d-none');
        }
    });
};

await app();
