// module.exports = mongoose => {
//     const Tutorial = mongoose.model(
//       "tutorial",
//       mongoose.Schema(
//         {
//           title: String,
//           description: String,
//           published: Boolean
//         },
//         { timestamps: true }
//       )
//     );
  
//     return Tutorial;
//   };

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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

const User = mongoose.model("User", UserSchema);

module.exports = User;