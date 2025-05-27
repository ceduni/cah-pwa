async function getData() {
    const url = `http://localhost:3000/api/gardens`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        return json;
    } catch (error) {
        console.error(error);
    }
}

export default getData