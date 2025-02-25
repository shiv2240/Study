const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect('mongodb+srv://shivsahni2240:e51j4i1P2qxscoYZ@myplace.moobold.mongodb.net/')
  .then(() => console.log('MongoDB connected…'))
  .catch(err => console.log(err));

app.use(express.static(__dirname));
app.use(express.json());

const Item = require('./model');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/addItem', async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    value: req.body.value
  });
  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
