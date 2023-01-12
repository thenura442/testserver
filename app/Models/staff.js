const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    Name: String,
    Email: String,
    Id: String,
    Password: String
  },
  { 
    timestamps: true 
  }
);

const User = mongoose.model("Staff", StaffSchema);

module.exports = User;