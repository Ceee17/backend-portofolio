// src/app.js
const express = require('express');
const app = express();
require('dotenv').config();
var morgan = require('morgan');
const projectRoutes = require('./routes/projectRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Parse JSON bodies
app.use('/api/projects', projectRoutes); // Route handling for projects
app.use('/upload', uploadRoutes);

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
