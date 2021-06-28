const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ["local", "google", "apple"],
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

  apple: {
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

//incrypting password
userSchema.pre("save", async (next) => {
  if (this.method != "local") next();
  const salt = await bcrypt.genSalt();
  this.local.password = await bcrypt.hash(this.local.password, salt);
  next();
});

// static method to login user
userSchema.statics.login = async (email, password) => {
  const user = await this.findOne({ "local.email": email });
  if (user) {
    const auth = await bcrypt.compare(password, user.local.password);
    if (auth) return user;
    throw Error("Incorrect Password!!!");
  }
  throw Error("Incorrect Email");
};

const User = mongoose.model("user", userSchema);

module.exports = User;