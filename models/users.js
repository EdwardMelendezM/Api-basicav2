const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
  {
    user: {
      type: 'string',
      unique: true
    },
    password: {
      type: 'string',
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
module.exports = mongoose.model("users", UserSchema)