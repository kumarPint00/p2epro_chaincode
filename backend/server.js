const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection string
const dbUri = "mongodb+srv://ayeshajui:Bangladesh_1971@clusterjui.vrplcks.mongodb.net/?retryWrites=true&w=majority&appName=clusterjui";

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const MineInfo = require('./MineInfo'); // Adjust the path as necessary

// Endpoint to handle form submission
app.post('/api/mineinfos', async (req, res) => {
  try {
    const newMineInfo = new MineInfo(req.body);
    const savedMineInfo = await newMineInfo.save();
    res.status(201).json(savedMineInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.post('/api/mineinfos', async (req, res) => {
  try {
    const newMineInfo = new MineInfo(req.body);
    const savedMineInfo = await newMineInfo.save();
    res.status(201).json(savedMineInfo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.get('/api/mineinfos', async (req, res) => {
  try {
    const state=req.body.state;
    const result=await MineInfo.find({state});
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// GET endpoint to retrieve all MineInfo documents
app.get('/alldata', async (req, res) => {
  try {
    const result = await MineInfo.find({}); // No filter applied, gets all documents
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
