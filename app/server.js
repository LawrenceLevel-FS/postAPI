const express = require("express");
const router = express.Router();
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3001;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// importing routers
const postRouter = require("./routes/postRoutes");

router.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `METHOD - ${req.method}, Status - ${res.statusCode}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.use("/api_v1/posts", postRouter);

module.exports = { app, port, router };
