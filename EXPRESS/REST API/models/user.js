const { default: mongoose } = require("mongoose");


// Schema
const userSchema = mongoose.Schema(
    {
      firstName: {
        type: String,
        require: true,
      },
      last_name: {
        type: String,
      },
      email: {
        type: String,
        require: true,
        unique: true,
      },
      job_title: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    { timestamps: true }
  );
  // Model
  const user = mongoose.model("user", userSchema);

  module.exports = { user } ;