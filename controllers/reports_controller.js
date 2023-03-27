const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const Report = require('../models/report');

// Create a new report for a patient
module.exports.createReport = async function (req, res) {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        const doctor = await Doctor.findById(req.user._id);

        const report = await Report.create({
            patient: patient,
            createdBy: doctor,
            status: req.body.status
        });

        return res.status(201).json({ report });
    } catch (err) {
        console.log('Error in reports_controller.createReport:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all reports by status
module.exports.allReportsByStatus = async function (req, res) {
    try {
        const reports = await Report.find({ status: req.params.status }).sort({ date: 'asc' });
        return res.status(200).json({ reports });
    } catch (err) {
        console.log('Error in reports_controller.allReportsByStatus:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};