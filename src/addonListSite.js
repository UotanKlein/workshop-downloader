const formattedDate = (sec) => {
    const date = new Date(sec * 1000);
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
        .getHours()
        .toString()
        .padStart(2, '0')}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    return formattedDate;
};

const app = async () => {
    const addonList = document.getElementById('addon-list');
    const domParser = new DOMParser();

    try {
        const response = await fetch('../src/addonList.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const addonJson = await response.json();

        Object.entries(addonJson).forEach(([id, val]) => {
            const name = val.name;
            const icon = val.icon;

            const data = formattedDate(val.data);

            const addonHtml = `
            <div class="addons mg-0 row">
                <a
                    class="addon-block col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 link-without"
                    href="#"
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
            </div>
            `;

            const element = domParser.parseFromString(addonHtml, 'text/html')
                .body.firstChild;

            addonList.appendChild(element);
        });
    } catch (error) {
        console.error('Ошибка загрузки JSON файла:', error);
    }
};

app();
