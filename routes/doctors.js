const express = require('express');
const router = express.Router();
const doctorsController = require('../controllers/doctors_controller');
const passport = require('passport');

// Register a new doctor
router.post('/register', doctorsController.register);

// Login a doctor
router.post('/login', doctorsController.login);

module.exports = router;