const { Schema, model } = require('mongoose');

const Useful = new Schema({
  word: { type: String },
  spanish: { type: String, default: '' },
});

const UsefulModel = model('UsefulModel', Useful);
module.exports = UsefulModel;
