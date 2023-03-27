const Patient = require('../models/patient');
const Report = require('../models/report');

// Register a new patient
module.exports.register = async function (req, res) {
    try {
        let patient = await Patient.findOne

        // Check if the patient already exists
        patient = await Patient.findOne({ phone: req.body.phone });
        if (patient) {
            return res.status(200).json({ patient });
        }

        patient = await Patient.create(req.body);

        return res.status(201).json({ patient });
    } catch (err) {
        console.log('Error in patients_controller.register:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get all reports of a patient
module.exports.allReports = async function (req, res) {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        const reports = await Report.find({ patient: patient }).sort({ date: 'asc' });

        return res.status(200).json({ reports });
    } catch (err) {
        console.log('Error in patients_controller.allReports:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};