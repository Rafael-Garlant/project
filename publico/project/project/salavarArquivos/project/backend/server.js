const express = required('express');
const mongoose = require('mongoose');
const medicoRoutes = requires('./routes/medicoRoutes');
const pacienteRoutes = requires('./routes/pacienteRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://<ZDB_Clinix>:<ZDBMongol.>@<cluster>.mongodb.net/clinix?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB conectado com sucesso'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/medicos', medicoRoutes);
app.use('/pacientes', pacienteRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});