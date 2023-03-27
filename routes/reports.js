const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reports_controller');
const passport = require('passport');

// Create a new report for a patient
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), reportsController.createReport);

// Get all reports by status
router.get('/:status', reportsController.allReportsByStatus);

module.exports = router;