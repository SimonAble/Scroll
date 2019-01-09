console.log("inside of user.js");

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    icon: {
    // User Model Attribute Icon
      type: String,
      required: [true, "Icon is required"],
    },
    username: {
    // User Model Attribute Userame
      type: String,
      required: [true, "Username is required"],
      maxlength: [16, "Username must be less than 16 characters."],
      minlength: [3, "Username must be at least 3 characters"]
    },
    // User Model Attribute Password
    password: {
      type: String,
      required: [true, "Password is required"],
      maxlength: [255, "Password must be less than 255 characters."],
      Minlength: [8, "Password must be at least 8 characters"]
    },
    // passwordConfirm: {
    // // User Model Attribute Confirm Password
    //   type: String,
    //   required: [true, "Password is required"],
    //   maxlength: [255, "Password must be less than 255 characters."],
    //   Minlength: [8, "Password must be at least 8 characters"]
    // },
    email: {
      type: String,
      required: [true, "Email is required"],
      maxlength: [255, "Email must be less than 255 characters."],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email address'],
    },
  },
  // Timestamps: createdAt updatedAt
  {timestamps: true}
);

// Setting the name of our user here
mongoose.model('User', UserSchema);
