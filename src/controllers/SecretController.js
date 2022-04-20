const { default: mongoose } = require('mongoose');
const SecretModel = require('../models/Secret');
const bcrypt = require('bcryptjs');
const res = require('express/lib/response');

module.exports.create = async (secret) => {
  try {
    console.log(secret);
    const res = await SecretModel.generate(secret);
    if (res) {
      const _id = mongoose.Types.ObjectId(res._id).toString();

      const respuesta = await this.createLink(_id, secret.secret);

      return respuesta;
    }
  } catch (error) {}
};

module.exports.buscar = async (secretLink) => {
  try {
    const query = { link: secretLink };

    const resp = await SecretModel.findOne(query);
    if (!resp) return { message: 'registro no existe' };
    if (resp.views > 0)
      return { message: 'este secreto ya sido visto anteriormente' };
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
