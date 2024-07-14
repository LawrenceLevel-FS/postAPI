const { getAllPosts, postPosts } = require("../controllers/postController");
const router = require("express").Router();

// http://localhost:3001/api_v1/posts

// @GET all posts
router.get("/", getAllPosts);

// @POST to server
router.post("/", postPosts);

module.exports = router;
