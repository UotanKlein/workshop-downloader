import axios from 'axios';
import errors from '../errors.js';
import { domEach } from 'cheerio/lib/utils';

const location = window.location;
const host = location.host;

const addonListLink = `http://${host}/addonList`;
const addonDownload = `http://${host}/downloadAddon`;

window.onload = () => {
    const addonList = document.querySelector('.addonList');
    addonList.setAttribute('href', addonListLink);
};

const app = async () => {
    const state = {
        inputValue: '',
    };

    const inputLink = document.querySelector('.upload-link');
    const submitForm = document.querySelector('.upload-section');

    inputLink.addEventListener('input', (e) => {
        var newInputValue = e.target.value;

        state.inputValue = newInputValue;
    });

    submitForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const linkBox = document.querySelector('#link-box');
        const errorText = linkBox.querySelector('#error-event');

        errorText.innerHTML = '';

        const domParser = new DOMParser();

        const loadStr = `
            <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        `;

        const loadDiv = domParser.parseFromString(loadStr, 'text/html').body.firstChild;
        errorText.append(loadDiv);

        const value = state.inputValue;

        try {
            const { status, data } = await axios.post(addonDownload, {
                link: value,
            });

            errorText.innerHTML = '';

            inputLink.classList.remove('error-input');
            inputLink.classList.add('successful-input');

            errorText.classList.remove('dp-none');
            errorText.classList.add('successful-text');
            errorText.textContent = data;
        } catch (err) {
            errorText.innerHTML = '';

            const errorResponse = err.response;
            const errorData = errorResponse.data;

            inputLink.classList.remove('successful-input');
            inputLink.classList.add('error-input');

            errorText.classList.remove('dp-none');
            errorText.classList.add('error-text');
            errorText.textContent = errorData.text;
        }
    });
};

await app();
