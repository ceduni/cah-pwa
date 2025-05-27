const admin = require('firebase-admin');
const serviceAccount = require('./../secret/greenity-firebase-adminsdk.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const toDate = (str) => admin.firestore.Timestamp.fromDate(new Date(str))

module.exports = { admin, toDate };

