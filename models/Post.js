const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  posts: [
    {
      postId: String,
      imageUrl: String,
      caption: String,
      like: {
        type: Array,
        default: [],
      },
      uploadDate: Date,
    },
  ],
});
const Post = mongoose.model("post", postSchema);

module.exports = Post;
