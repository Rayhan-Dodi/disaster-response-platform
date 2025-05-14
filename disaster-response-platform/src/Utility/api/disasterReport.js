// server.js or api/disasterReport.js
const express = require('express');
const bodyParser = require('body-parser');
const saveDisasterReport = require('./saveDisasterReport');

const app = express();
app.use(bodyParser.json());

app.post('/api/report', async (req, res) => {
    try {
        const result = await saveDisasterReport(req.body);
        res.status(201).send({ message: 'Report saved', id: result.insertedId });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Failed to save report' });
    }
});

app.listen(3001, () => console.log('API running on port 3001'));
