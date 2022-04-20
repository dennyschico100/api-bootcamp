const ShortUrlController = require('../controllers/ShortUrl');
const router = require('express').Router();
const { nanoid } = require('nanoid');

router.post('/', async (req, res) => {
  try {
    let { alias, url } = req.body;
    if (!alias) {
      alias = nanoid(5);
    }
    console.log('alias ...' + alias);
    const response = await ShortUrlController.newUrl(alias, url);
    console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});
router.get('/:id', ShortUrlController.redirect);

module.exports = router;
