const express = require('express');
const connectDb = require('./db');

const app = express();

connectDb();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

app.use(express.json());

app.use('/medico', require('./routes/medicoRoutes'))
app.use('/paciente', require('./routes/pacienteRoutes'))