const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Please add a title"] },
  author: { type: String, required: [true, "Please add an author"] },
  date: { type: String, required: true },
  content: { type: String, required: [true, "Content can't be blank"] },
  tags: String,
  comments: Array,
});

module.exports = Post = mongoose.model("Post", postSchema);
