// db.js
require('dotenv').config(); 
const mongoose = require('mongoose');

const {
    MONGO_URI,
    MONGO_HOST,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_DBNAME,
    MONGO_LOCAL,
  } = process.env;
  
  let mongoUri = MONGO_URI;
  
  if (MONGO_LOCAL) {
    mongoUri = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`;
  }
  
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      bufferCommands: false, // menonaktifkan buffering untuk menghindari penundaan jika koneksi gagal
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};


module.exports = connectDB;
