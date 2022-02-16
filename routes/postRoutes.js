const { Router } = require("express");
const postController = require("../controller/postController");
const multer = require("../config/multer");

const router = Router();

//route
//base-api = /api/post

router.post("/createPost", multer.single("file"), postController.create_post);
router.get("/getPosts/:location", postController.getPost);
router.post("/like", postController.updateLike);
router.get("/getPostsById/:userId", postController.getPostsById);
module.exports = router;
