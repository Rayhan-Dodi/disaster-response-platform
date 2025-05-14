// mongoClient.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/disasterDB?retryWrites=true&w=majority"; // Replace with your MongoDB URI

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function connectToMongo() {
    if (!client.isConnected) await client.connect();
    return client.db('disasterDB'); // Database name
}

module.exports = connectToMongo;
