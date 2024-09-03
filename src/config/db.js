// db.js
require('dotenv').config(); 
const mongoose = require('mongoose');

const {
    MONGO_HOST,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_DBNAME,
    MONGO_LOCAL,
  } = process.env;
  
  console.log(MONGO_HOST, MONGO_PORT, MONGO_DBNAME);

  let MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;
  
  if (MONGO_LOCAL) {
    MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;
  }
  
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // menonaktifkan buffering untuk menghindari penundaan jika koneksi gagal
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


module.exports = connectDB;
