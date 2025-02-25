// src/app.js
const express = require('express');
const app = express();
require('dotenv').config();
const projectRoutes = require('./routes/projectRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev', { stream: { write: message => logger.http(message) } }));
} else if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream: { write: message => logger.http(message) } }));
}

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Parse JSON bodies
app.use('/api/projects', projectRoutes); // Route handling for projects
app.use('/upload', uploadRoutes);

// Optional: If you want to log CORS requests
app.use((req, res, next) => {
  console.log(`CORS Request from: ${req.header('Origin')}`);
  next();
});

app.get('/config', (req, res) => {
  res.json({
    cloudName: process.env.CLOUD_NAME,
    uploadPreset: 'my_preset'
  });
});

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
