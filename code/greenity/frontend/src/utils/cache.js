export function getFromCache(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
}

export function saveInCache(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromCache(key) {
    localStorage.removeItem(key);
}

export function clearCache() {
    localStorage.clear();
}

