// models/Garden.js
const { admin } = require('../firebase');

class Garden {
    constructor({ id, name, location, borough, address, creationDate, revisionDate, lastUpdated }) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.borough = borough;
        this.address = address;
        this.creationDate = creationDate;
        this.revisionDate = revisionDate;
        this.lastUpdated = lastUpdated ?? admin.firestore.Timestamp.now();
    }

    static fromApi(apiRecord) {
        return new Garden({
            id: apiRecord.id?.toString() || null,
            name: apiRecord.nom || 'N/A',
            location: {
                lat: parseFloat(apiRecord.latitude || 0),
                lng: parseFloat(apiRecord.longitude || 0)
            },
            borough: apiRecord.arrondissement || 'N/A',
            address: apiRecord.adresse || '',
            creationDate: apiRecord.date_creation ? admin.firestore.Timestamp.fromDate(new Date(apiRecord.date_creation)) : null,
            revisionDate: apiRecord.date_revision ? admin.firestore.Timestamp.fromDate(new Date(apiRecord.date_revision)) : null
        });
    }

    static fromFirestore(doc) {
        const data = doc.data();

        return new Garden({
            id: doc.id,
            name: data.name,
            location: data.location,
            borough: data.borough,
            address: data.address,
            creationDate: data.creationDate,
            revisionDate: data.revisionDate,
            lastUpdated: data.lastUpdated,
        });
    }

    toFirestore() {
        return {
            id: this.id,
            name: this.name,
            location: this.location,
            borough: this.borough,
            address: this.address,
            creationDate: this.creationDate,
            revisionDate: this.revisionDate,
            lastUpdated: this.lastUpdated
        };
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            location: this.location,
            borough: this.borough,
            address: this.address,
            creationDate: this.creationDate?.toDate().toISOString() || null,
            revisionDate: this.revisionDate?.toDate().toISOString() || null,
            lastUpdated: this.lastUpdated?.toDate().toISOString() || null
        };
    }
}

module.exports = Garden;
