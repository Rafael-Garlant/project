const express = require('express');
const router = express.Router();

const pacienteController = require('../controllers/pacienteController');

router.post('/cadastrar', (req, res) => {
    res.send('Rota de cadastro de médico');
});

router.get('/', pacienteController.getPacientes);


module.exports = router