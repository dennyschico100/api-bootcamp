const { Schema, model } = require('mongoose');

const secretSchema = new Schema({
  secret: { type: String },
  views: { type: Number, default: 0 },
  link: { type: String, default: '' },
});

/*userSchema.statics.comparePassword = async (password, receivedPassword) => {
  const valid_password = await bcrypt.compare(password, receivedPassword);
  return valid_password;
};*/

const SecretModel = model('Secret', secretSchema);
module.exports = SecretModel;

SecretModel.generate = async ({ secret, views }) => {
  try {
    let sec;

    sec = new SecretModel();
    sec.secret = secret;
    sec.views = views;
    sec = await sec.save();
    return sec;
  } catch (error) {
    console.log(`[producto - generate ] JSON.stringify(err)`);

    throw error;
  }
};
