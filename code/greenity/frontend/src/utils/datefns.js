function parseDate(strDate, timezone = 'EDT') {
    if (typeof strDate !== 'string') {
        console.warn("Date received is not a string.");
        return strDate;
    }

    return new Date(`${strDate.trim()} ${timezone}`);
}

/**
 * Compare deux dates utilisant le format AAAA-MM-JJ
 * @param {string} date1 
 * @param {string} date2 
 * @returns {Number} `1 si date2 > date1`; `-1 si date2 < date1`; `0 si date2 = date1` 
 */
export function compareDate(date1, date2) {
    const d1 = parseDate(date1);
    const d2 = parseDate(date2);

    if (isNaN(d1) || isNaN(d2)) {
        throw new Error("Invalid date format");
    }

    if (d2 > d1) return 1;
    if (d2 < d1) return -1;

    return 0;
}

/**
 * Vérifie si une date cible se trouve dans l'intervalle [start, end]
 * @param {string} target - La date à vérifier
 * @param {string} start - La date de début de l'intervalle
 * @param {string} end - La date de fin de l'intervalle
 * @returns {boolean} true si la date cible est dans l'intervalle, sinon false
 */
export function isWithin(target, start, end) {
    return compareDate(start, target) <= 0 && compareDate(target, end) <= 0;
}

/**
 * Vérifie si une date est avant une autre
 * @param {string} date1 - La première date
 * @param {string} date2 - La deuxième date
 * @returns {boolean} true si date1 est avant date2, sinon false
 */
export function isBefore(date1, date2) {
    return compareDate(date1, date2) <= 0;
}

/**
 * Vérifie si une date est après une autre
 * @param {string} date1 - La première date
 * @param {string} date2 - La deuxième date
 * @returns {boolean} true si date1 est après date2, sinon false
 */
export function isAfter(date1, date2) {
    return compareDate(date1, date2) >= 0;
}


const Months = {
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
}

const formatDate = {
    /**
     * @param {Date} d 
     */
    fr: (d) => `${d.getDate()} ${Months.fr[d.getMonth()]} ${d.getFullYear()}`
}

export function toDateString(strDate, lang = 'fr') {
    const date = parseDate(strDate);
    return formatDate[lang](date)
}