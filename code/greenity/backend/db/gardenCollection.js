const { admin } = require('./firebase');
const Garden = require('./models/Garden');

const db = admin.firestore();
const COLLECTION_NAME = 'gardens';


async function updateCollection(records) {
    const collectionRef = db.collection(COLLECTION_NAME);
    let batch = db.batch();
    
    const result = []
    for (const record of records) {
        const garden = Garden.fromApi(record);
        const docId = garden.id;

        if (!docId) continue;

        result.push(garden.toJSON())

        const docRef = collectionRef.doc(docId);
        batch.set(docRef, garden.toFirestore(), { merge: true });
    }

    await batch.commit();

    return result;
}


async function getAllGardens() {
    const snapshot = await db.collection(COLLECTION_NAME).get();
    return snapshot.docs.map(Garden.fromFirestore);
}

async function getGardenById(id) {
    const doc = await db.collection(COLLECTION_NAME).doc(id).get();
    return doc.exists ? Garden.fromFirestore(doc) : null;
}

async function deleteGardenById(id) {
    await db.collection(COLLECTION_NAME).doc(id).delete();
    return true;
}


module.exports = {
    updateCollection,
    getAllGardens,
    getGardenById,
    deleteGardenById
};
