const { Schema, model } = require('mongoose');

const WordSChema = new Schema({
  word: { type: String },
  spanish: { type: String, default: '' },
});
const WordModel = model('WordModel', WordSChema);
module.exports = WordModel;
