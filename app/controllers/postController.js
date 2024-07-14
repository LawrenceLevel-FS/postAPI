const Post = require("../models/postModel");

// @GET all posts
const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json({ all_posts: allPosts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @POST to server
const postPosts = async (req, res) => {
  const post = req.body;
  try {
    res.status(201).send(post.post);
    await Post.create(post.post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @GET one Post by ID

// @UPDATE Post by ID

// @DELETE Post by ID

module.exports = { getAllPosts, postPosts };
