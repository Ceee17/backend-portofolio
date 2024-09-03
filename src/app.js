// src/app.js
const express = require('express');
const app = express();
const projectRoutes = require('./routes/projectRoutes');

app.use(express.json()); // Parse JSON bodies
app.use('/api/projects', projectRoutes); // Route handling for projects

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
