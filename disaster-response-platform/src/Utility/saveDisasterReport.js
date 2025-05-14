// saveDisasterReport.js
const connectToMongo = require('./mongoClient');

async function saveDisasterReport(data) {
    const db = await connectToMongo();
    const collection = db.collection('disaster_reports');

    const result = await collection.insertOne({
        description: data.description,
        location: data.location,
        severity: data.severity,
        imageURL: data.imageURL || null,
        timestamp: new Date(),
    });

    return result;
}

module.exports = saveDisasterReport;
