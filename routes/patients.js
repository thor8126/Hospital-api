const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/patients_controller');
const passport = require('passport');

// Register a new patient
router.post('/register', patientsController.register);

// Get all reports of a patient
router.get('/:id/all_reports', patientsController.allReports);

module.exports = router;