const express = require('express');
const router = express.Router();

const medicoController = require('../controllers/medicoController');

router.post('/cadastrar', (req, res) => {
    res.send('Rota de cadastro de médico');
});

router.get('/', medicoController.getMedicos)

module.exports = router