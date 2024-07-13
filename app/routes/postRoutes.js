const { getAllPosts, postPosts } = require("../controllers/postController");
const router = require("express").Router();

// http://localhost:3001/api_v1/posts

router.get("/", getAllPosts);
router.post("/", postPosts);

module.exports = router;
