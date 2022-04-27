const { Schema, model } = require('mongoose');

const PhrasalVerb = new Schema({
  word: { type: String },
  spanish: { type: String, default: '' },
});

const PhrasalVerbModel = model('PhrasalVerbModel', PhrasalVerb);
module.exports = PhrasalVerbModel;
