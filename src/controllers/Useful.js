const usefulModel = require('../models/Useful');
module.exports.create = async (objWord) => {
  try {
    console.log(objWord);
    const res = await usefulModel.create(objWord);
    return res;
  } catch (error) {
    return error;
  }
};

module.exports.buscar = async () => {
  try {
    const resp = await usefulModel.find();
    return resp;
  } catch (error) {
    return error;
  }
};
