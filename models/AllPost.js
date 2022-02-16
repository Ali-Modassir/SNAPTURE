const mongoose = require("mongoose");

const allPostSchema = mongoose.Schema({
  userId: String,
  location: String,
  userName: String,
  imageUrl: String,
  caption: String,
  postId: String,
  like: {
    type: Array,
    default: [],
  },
  uploadDate: Date,
});

module.exports = mongoose.model("allPost", allPostSchema);
