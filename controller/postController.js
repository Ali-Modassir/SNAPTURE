const express = require("express");
const uploadImage = require("../googleStorage/fileUpload");
const Post = require("../models/Post");
const AllPost = require("../models/AllPost");
const { v1: uuid } = require("uuid");

//create-post
module.exports.create_post = async (req, res) => {
  try {
    const { userId, userName, userEmail, caption } = req.body;
    const myFile = req.file;

    const imageUrl = await uploadImage(myFile);
    if (!imageUrl)
      return res
        .status(400)
        .json({ message: "Unable to upload Image", ok: false });
    const postId = uuid();
    const uploadDate = Date.now();
    const newPost = {
      imageUrl,
      caption,
      postId,
      uploadDate,
    };
    const getUser = await Post.findOne({ userId });
    if (getUser) {
      getUser.posts.push(newPost);
      getUser.save();
    } else {
      const newUser = await Post.create({
        userId,
        userName,
        userEmail,
        posts: [newPost],
      });
      await newUser.save();
    }
    const latestPost = {
      userId,
      userName,
      imageUrl,
      caption,
      postId,
      uploadDate,
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
    const { userId, postId, type, userLikedId } = req.body;
    const getPost = await Post.findOne({
      userId: userId,
      posts: { $elemMatch: { postId: postId } },
    });
    if (!getPost) {
      return res.json({ message: "Post Not found", ok: false });
    }
    var set = new Set(getPost.posts[0].like);
    if (type) {
      set.delete(userLikedId);
    } else if (!type) {
      if (set.has(userLikedId))
        return res.json({ message: "Already Liked", ok: false });
      set.add(userLikedId);
    }
    getPost.posts[0].like = Array.from(set);
    getPost.save();

    const allPost = await AllPost.findOne({ postId });
    if (!allPost) return res.json({ message: "Post Not found", ok: false });
    allPost.like = Array.from(set);
    allPost.save();
    return res.json({
      likes: getPost.posts[0].like,
      ok: true,
      message: "updated",
    });
  } catch (err) {
    console.log(err);
    return res.json({ message: "Something went Wrong", ok: false });
  }
};

//getAllPost
module.exports.getPost = async (req, res) => {
  try {
    const getAllPost = await AllPost.find({}).sort({ createdAt: "desc" });
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
