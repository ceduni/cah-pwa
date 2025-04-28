import { saveInCache } from './../utils/cache';

const BASE_URL = 'https://donnees.montreal.ca/api/3/action/datastore_search';
const RESOURCE_ID = 'd617b942-7bdf-4e8e-87e9-0bc9b3a088c0';

async function getData(limit = 20) {
    const url = `https://donnees.montreal.ca/api/3/action/datastore_search?resource_id=d617b942-7bdf-4e8e-87e9-0bc9b3a088c0`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        saveInCache('data', json.result.records);

        return json.result;
    } catch (error) {
        console.error(error);
    }
}

export default getData