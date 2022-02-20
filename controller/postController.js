const uploadImage = require("../fileUpload/fileUpload");
const AllPost = require("../models/AllPost");
const { v1: uuid } = require("uuid");

//create-post
module.exports.create_post = async (req, res) => {
  try {
    const { userId, userName, caption, location } = req.body;
    const myFile = req.file;
    const image = await uploadImage(myFile);
    const imageUrl = image.url;
    if (!imageUrl)
      return res
        .status(400)
        .json({ message: "Unable to upload Image", ok: false });
    const postId = uuid();
    const uploadDate = Date.now();
    const latestPost = {
      userId,
      userName,
      imageUrl,
      caption,
      postId,
      uploadDate,
      location,
    };
    const latPost = await AllPost.create(latestPost);
    await latPost.save();
    return res.json({ message: "Post Uploaded!!", ok: true });
  } catch (error) {
    console.log(error);
    res.json({ message: "Something went wrong", ok: false });
  }
};

//update_like
module.exports.updateLike = async (req, res) => {
  try {
    const { postId, userLikedId } = req.body;
    const getPost = await AllPost.findOne({ postId });
    if (!getPost) return res.json({ message: "Post not found", ok: false });
    const set = new Set(getPost.like);
    if (set.has(userLikedId)) {
      set.delete(userLikedId);
      getPost.like = Array.from(set);
      getPost.save();
      return res.json({ message: "Disliked", ok: true });
    } else {
      set.add(userLikedId);
      getPost.like = Array.from(set);
      getPost.save();
      return res.json({ message: "Liked", ok: true });
    }
  } catch (err) {
    console.log(err);
    return res.json({ message: "Something went Wrong", ok: false });
  }
};

//getAllPost
module.exports.getPost = async (req, res) => {
  try {
    const { location } = req.params;
    const getAllPost = await AllPost.find({ location }).sort({
      uploadDate: -1,
    });
    if (getAllPost.length != 0)
      return res.json({ posts: getAllPost, ok: true });
    else return res.json({ message: "No Post Found", ok: false });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Something went wrong", ok: false });
  }
};

module.exports.getPostsById = async (req, res) => {
  const { userId } = req.params;
  try {
    const allPosts = await AllPost.find({ userId }).sort({ createdAt: "desc" });
    if (!allPosts)
      return res.status(400).json({ message: "User not found", ok: false });
    if (allPosts.length === 0)
      return res.json({ message: "No posts found", ok: false });
    return res.json({ posts: allPosts, ok: true });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Fetching Post failed", ok: false });
  }
};
