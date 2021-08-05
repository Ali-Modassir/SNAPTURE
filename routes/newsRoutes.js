const { Router } = require("express");
const newsController = require("../controller/newsController");

const router = Router();

router.get("/:type", newsController.getNews);

module.exports = router;
