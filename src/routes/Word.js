const router = require('express').Router();
const WordController = require('../controllers/WordController');
const WordModel = require('../models/Word');
router.post('/saveFirstTime', async (req, res) => {
  try {
    const wordObj = {
      data: req.body.data,
    };
    const resp = await WordController.create(wordObj.data);
    console.log(resp);
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send('ocurrio un error' + error);
  }
});
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const wordObj = {
      word: req.body.word,
      spanish: req.body.spanish,
    };
    console.log('guardando' + wordObj.word);
    console.log(wordObj);
    const resp = await WordController.create(wordObj);
    res.send(resp);
  } catch (error) {
    res.send('ocurrio un error' + error);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await WordController.buscar();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});
router.put('/', async (req, res) => {
  try {
    console.log(req.query);
    const link = req.query.link;

    const data = await SecretController.modificar(link);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
