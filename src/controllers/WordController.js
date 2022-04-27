const { default: mongoose } = require('mongoose');
const WordModel = require('../models/Word');
const bcrypt = require('bcryptjs');
const res = require('express/lib/response');

module.exports.create = async (objWord) => {
  try {
    console.log(objWord);
    const res = await WordModel.create(objWord);
    return res;
  } catch (error) {
    return error;
  }
};

module.exports.buscar = async () => {
  try {
    const resp = await WordModel.find();
    return resp;
  } catch (error) {
    return error;
  }
};
module.exports.modificar = async (secretLink) => {
  try {
    const query = { link: secretLink };
    const updateAction = {
      $set: { views: 1 },
    };
    const resp = await SecretModel.findOneAndUpdate(query, updateAction, {
      new: true,
    });
    if (!resp) return { message: 'registro no existe' };

    return resp;
  } catch (error) {
    return error;
  }
};

module.exports.createLink = async (id, secret) => {
  try {
    let link = '';
    const updateQuery = { _id: id };
    const updateAction = {
      $set: { link: bcrypt.hashSync(id, 10), secret: secret },
    };

    console.log(updateAction);
    const resp = await SecretModel.findOneAndUpdate(updateQuery, updateAction, {
      new: true,
    });
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
