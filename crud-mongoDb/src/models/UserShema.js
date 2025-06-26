const mongoose = require('mongoose');

// Define o schema do usuário
const userSchema = new mongoose.Schema({
  name: String,
  email: String
}, { collection: 'usuarios' }); // <-- Define explicitamente o nome da coleção no MongoDB

// Cria o model com base no schema
const User = mongoose.model('User', userSchema);

// Exporta o model para ser usado nos controllers
module.exports = User;
