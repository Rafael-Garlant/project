const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = new mongoose.Schema ({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
}, {
    timestamps: true
})

const encrypted = await bcrypt.hash(req.body.senha, 10) 
module.exports = mongoose.model('Paciente', patientSchema)