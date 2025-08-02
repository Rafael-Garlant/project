const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const medicoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    crm: {type: String, required: true, unique: true},
    especialidade: {type: String, required: true},
}, {
    timestamps: true
})
const encrypted = await bcrypt.hash(req.body.senha, 10);
module.exports = mongoose.model('Medico', medicoSchema);