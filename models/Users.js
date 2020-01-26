const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  modified: {
    type: Date,
    value: Date.now()
  }
});

module.exports = mongoose.model("users", UserSchema);
