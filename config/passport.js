const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/doctor');
require('dotenv').config();

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      Doctor.findById(jwt_payload._id)
        .then((doctor) => {
          if (doctor) {
            return done(null, doctor);
          }
          return done(null, false);
        }
        )
        .catch((err) => console.log(err));
    })
  );
};
