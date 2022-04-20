const ShortUrl = require('../models/ShortUrl');

module.exports.newUrl = async (alias, url) => {
  try {
    const newShortUrl = { alias, url };
    const res = ShortUrl.create(newShortUrl);
    return res;
  } catch (error) {
    return error;
  }
};
module.exports.redirect = async (req, res) => {
  const { id: alias } = req.params;
  try {
    const url = await ShortUrl.findOne({ alias });
    if (url) {
      return res.redirect(url.url);
    } else {
      return res.status(404).send({ message: 'invalid url' });
    }
  } catch (error) {
    return res.status(404).send({ message: 'invalid url' });
  }
};
