const mongoose = require("mongoose");

async function connectDB() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://daanstarks:rszzfYN3mxk4ozv4@cluster0.dwnmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Conectado ao Banco de dados");
  } catch (error) {
    console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;
