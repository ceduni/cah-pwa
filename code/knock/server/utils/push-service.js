const webpush = require('web-push');

const publicKey = "BJJYVRRw-B1mI6NbVXqBuZKB-i88Aipso_H-xOnrf_vyn9YCn1MCXttLLD6JUuHNJU2ywr5V7kBr_hbFhzkapSw";
const privateKey = "iWedKd5wKW9lCQ9fs9Eka68LwLPHBDy1AzobtHjTOX0";
const contactEmail = "mailto:lelafontant@yahoo.ca";

webpush.setVapidDetails(contactEmail, publicKey, privateKey);

function sendPushNotification(subscription, payload) {
    return webpush.sendNotification(subscription, JSON.stringify(payload));
}

module.exports = { sendPushNotification };
