const { Schema, model } = require('mongoose');

const Useful = new Schema({
  word: { type: String },
  spanish: { type: String, default: '' },
});

const UsefulModel = model('PhrasalVerbModel', Useful);
module.exports = UsefulModel;
