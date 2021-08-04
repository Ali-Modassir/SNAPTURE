const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ["local", "google", "microsoft"],
    required: true,
  },

  local: {
    name: String,
    email: {
      type: String,
      validate: [isEmail, "Please enter a valid email"],
      unique: true,
    },
    password: String,
    confirmed: {
      type: Boolean,
      default: false,
    },
    profilePic: String,
    institute: String,
    division: String,
    followers: Array,
    following: Array,
    friend: [
      { 
        conversationId:String,
        friendId: String,
        friendName: String,
        friendProfilePic: String,
      },
    ],
    secretToken: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },

  google: {
    id: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
  },
  microsoft: {
    id: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    token: {
      type: String,
      default: "",
    },
  },
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ "local.email": email });
  if (user) {
    const auth = await bcrypt.compare(password, user.local.password);
    if (auth) return user;
    return "Incorrect Password!!!";
  }
  return "Incorrect Email!!!";
};

const User = mongoose.model("user", userSchema);

module.exports = User;
