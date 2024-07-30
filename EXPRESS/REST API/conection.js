const { default: mongoose } = require("mongoose");



async function connectMongoDB(URL) {
  //Conection
  return  await mongoose.connect(URL);
}

module.exports = connectMongoDB;
