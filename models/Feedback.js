const mongoose = require("mongoose");
const { isEmail } = require("validator");

const FeedBackSchema = mongoose.Schema({
  email: {
    type: String,
    validate: [isEmail, "Please enter a valid email"],
  },
  name: String,
  description: String,
});

module.exports = mongoose.model("feedbacks", FeedBackSchema);
