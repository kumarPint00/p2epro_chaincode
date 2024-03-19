const mongoose = require('mongoose');

const MineInfoSchema = new mongoose.Schema({
  state: String,
  coordinates: String,
  severity: String,
  type: String,
  mineFoundDate: Date,
  description: String,
});

module.exports = mongoose.model('MineInfo', MineInfoSchema);
