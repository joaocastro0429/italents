// src/database/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Carrega variáveis do .env

async function connectDB() {
  try {
await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ Conectado ao MongoDB Atlas com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao conectar ao MongoDB Atlas:', err);
    process.exit(1);
  }
}

module.exports = connectDB;
