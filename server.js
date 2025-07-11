const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;

const PORT = 5055;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL = "mongodb://<USERNAME>:<PASSWORD>@localhost:27017";
const client = new MongoClient(MONGO_URL);

//GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');

    const db = client.db("<YOUR DB NAME>");
    const data = await db.collection('<COLLECTION NAME>').find({}).toArray();
    
    client.close();
    res.send(data);
});

//POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect(MONGO_URL);
    console.log('Connected successfully to server');

    const db = client.db("<YOUR DB NAME>");
    const data = await db.collection('<COLLECTION NAME>').insertOne(userObj);
    console.log(data);
    console.log("data inserted in DB");
    client.close();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
