const router = require('express').Router();
const PhrasalController = require('../controllers/PhrasalController');
const PhrasalModel = require('../models/PhrasalVerb');
router.post('/saveFirstTime', async (req, res) => {
  try {
    const wordObj = {
      data: req.body.data,
    };
    const resp = await PhrasalController.create(wordObj.data);
    console.log(resp);
    res.send(resp);
  } catch (error) {
    console.log(error);
    res.send('ocurrio un error' + error);
  }
});
router.post('/', async (req, res) => {
  try {
    const wordObj = {
      word: req.body.word,
      spanish: req.body.spanish,
    };
    console.log('guardando un secreto' + wordObj.word);
    console.log(wordObj);
    const resp = await PhrasalController.create(wordObj);
    res.send(resp);
  } catch (error) {
    res.send('ocurrio un error' + error);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await PhrasalController.buscar();
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
