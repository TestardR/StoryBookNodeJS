const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: true // google is our only authentification system
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create collection and add schema
mongoose.model('users', UserSchema);
