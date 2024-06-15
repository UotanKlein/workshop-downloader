import axios from 'axios';
import errors from '../errors.js';

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
        const errorText = linkBox.querySelector('.error-text');

        const value = state.inputValue;

        try {
            const { status, data } = await axios.post(addonDownload, {
                link: value,
            });

            inputLink.classList.remove('error-input');
            inputLink.classList.add('successful-input');

            errorText.classList.remove('dp-none');
            errorText.classList.add('successful-text');
            errorText.textContent = data;
        } catch (err) {
            const errorResponse = err.response;

            console.log(errorResponse);

            if (errorResponse) {
                const errorData = errorResponse.data;

                inputLink.classList.remove('successful-input');
                inputLink.classList.add('error-input');

                errorText.classList.remove('dp-none');
                errorText.classList.add('error-text');
                errorText.textContent = errorData.text;
            } else {
                console.log('Ошибка при запросе:', err);
            }
        }
    });
};

await app();
