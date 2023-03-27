const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

// Register a new doctor
module.exports.register = async function(req, res) {
  try {
    let doctor = await Doctor.findOne({ username: req.body.username });

    if (doctor) {
      return res.status(422).json({ message: 'Username already exists' });
    }

    doctor = await Doctor.create(req.body);

    return res.status(201).json({ doctor });
  } catch (err) {
    console.log('Error in doctors_controller.register:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Login a doctor
module.exports.login = async function(req, res) {
  try {
    let doctor = await Doctor.findOne({ username: req.body.username });

    if (!doctor || doctor.password != req.body.password) {
      return res.status(422).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ _id: doctor._id }, process.env.JWT_SECRET);

    return res.status(200).json({ token });
  } catch (err) {
    console.log('Error in doctors_controller.login:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
