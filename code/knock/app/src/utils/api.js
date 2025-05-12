const API_URL = 'http://localhost:3000/api';

const cleanURL = (url) => {
  const [protocol, rest] = url.split('://');
  return `${protocol}://${rest.replace(/\/+/g, '/')}`;
};
const toURL = (endpoint) => cleanURL(`${API_URL}/${endpoint}`);

export async function POST(endpoint, body, headers = { 'Content-Type': 'application/json' }) {
    return await fetch(toURL(endpoint), {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers,
    });
} 