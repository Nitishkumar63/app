const mongoose = require("mongoose");

const ConnectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connent");
  } catch (error) {
    console.log("Mongodb not Connent");
  }
};

module.exports = ConnectDb;

ConnectDb();
