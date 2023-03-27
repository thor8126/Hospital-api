const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
require('dotenv').config();
// Import routes
const doctorRoutes = require('./routes/doctors');
const patientRoutes = require('./routes/patients');
const reportRoutes = require('./routes/reports');

// Initialize express app
const app = express();

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for passport authentication
app.use(passport.initialize());
require('./config/passport')(passport);

// Set up database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Check database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

// Use routes
app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/reports', reportRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
