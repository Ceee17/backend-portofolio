// src/routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Define routes
router.post('/create', projectController.createProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectById);
router.put('/update/:id', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;
