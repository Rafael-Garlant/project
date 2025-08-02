// dbTest.js
const mongoose = require('mongoose');

const URI = 'mongodb+srv://<ZDB_Clinix>:<ZDBMongol.>@<Clinix>.mongodb.net/<clinix>?retryWrites=true&w=majority&appName=<NOME_APP>';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado com sucesso ao MongoDB!");
  mongoose.connection.close(); // Fecha a conexão após o teste
})
.catch((err) => {
  console.error("❌ Erro ao conectar ao MongoDB:", err);
});
