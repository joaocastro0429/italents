import mongoose from "mongoose";

async function connectionDb() {
  try {

    await mongoose.connect(process.env.MONGO_DB);

    console.log("🟢 Conectado ao MongoDB com sucesso!");
  } catch (erro) {
    console.error("🔴 Erro ao conectar ao banco:", erro.message);
  }
}

export default connectionDb;

