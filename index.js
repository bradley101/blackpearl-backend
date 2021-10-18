let admin = require('firebase-admin')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const express = require('express');
const app = express();

var serviceAccount = require("./config.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://blackpearl-10.firebaseio.com"
});

let db = getFirestore();
app.use(express.json());
app.get('/', async (req, res) => {
    res.status(200).send("Done!");
});

let fcm = admin.messaging();

let persist = async data => {
    if (data.message && data.inductId && data.timestamp && data.severity) {
        await db.collection('test-collection').add(data);
        await fcm.sendToTopic("notify", {
            data: {
                data: JSON.stringify(data)
            }
        });
        console.log('Sent to topic');
    }
};

app.post('/notify', async (req, res) => {
    try {
        data = req.body;
        console.log(data);
        persist(data);
        res.status(200).send({"msg": "Sent successfully."});
    } catch (error) {
        res.status(500).send(error)
    }
    
    
})

app.listen(3443);