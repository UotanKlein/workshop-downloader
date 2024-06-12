import axios from 'axios';

const app = async () => {
    const dataLink = 'http://localhost:3000/dataAddon';

    const dataTree = await axios.get(dataLink);

    const jsonData = dataTree.data;

    console.log(JSON.parse(jsonData));
};

await app();
