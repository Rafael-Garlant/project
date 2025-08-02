const mongoose = require('mongoose');

const connect = async () =>{
    try {
        await mongoose.connect('mongodb+srv://ZDB_Clinix:clinix@clinix.bbb9dar.mongodb.net/?retryWrites=true&w=majority&appName=Clinix')
        console.log('Conexão feita com sucesso ao banco de dados.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }   
};

module.exports = connect;