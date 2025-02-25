const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();
const port = 3001;
app.use(express.urlencoded({ extended: true }));


const DB_URL = process.env.URL;

const UserSchema = mongoose.Schema({
    name: String,
    city: String,
    country: String,
    age: Number
});

const UserModel = mongoose.model("user", UserSchema);

const main = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Successfully connected to Mongo Server...");

        // Fetch all users
        app.get('/users', async (req, res) => {
            try {
                const users = await UserModel.find();
                res.json(users);
            } catch (err) {
                res.status(500).send("Error fetching users");
            }
        });

        // Add a new user
        app.post('/addUser', async (req, res) => {
            try {
                const newUser = new UserModel({
                    name: req.body.name,
                    city: req.body.city,
                    country: req.body.country,
                    age: req.body.age
                });
                const savedUser = await newUser.save();
                res.json(savedUser);
            } catch (err) {
                res.status(500).send("Error adding user");
            }
        });

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (err) {
        console.log("Error connected to DB");
        console.log(err);
    }
};

main();
