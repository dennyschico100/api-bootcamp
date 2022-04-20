const router = require('express').Router();
const SecretController = require('../controllers/SecretController');
const SecretModel = require('../models/Secret');
router.post('/', async (req, res) => {
  try {
    const secretObj = {
      secret: req.body.secret,
      views: 0,
    };
    console.log('guardando un secreto' + secretObj.secret);
    console.log(secretObj);
    const resp = await SecretController.create(secretObj);
    res.send(resp);
  } catch (error) {
    res.send('ocurrio un error' + error);
  }
});

router.get('/', async (req, res) => {
  try {
    console.log(req.query);
    const link = req.query.link;
    console.log('buscando ' + link);

    const data = await SecretController.buscar(link);
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
