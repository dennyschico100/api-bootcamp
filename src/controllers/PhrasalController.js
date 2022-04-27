const PhrasalVerbModel = require('../models/PhrasalVerb');
module.exports.create = async (objWord) => {
  try {
    console.log(objWord);
    const res = await PhrasalVerbModel.create(objWord);
    return res;
  } catch (error) {
    return error;
  }
};

module.exports.buscar = async () => {
  try {
    const resp = await PhrasalVerbModel.find();
    return resp;
  } catch (error) {
    return error;
  }
};
