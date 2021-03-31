const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const resultsRouter = require("./routes/resultsRouter.js");
const userRouter = require("./routes/userRouter");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@cluster0.7bypk.mongodb.net/${process.env.MongoDB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection working");
});

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.use("/users", userRouter);
app.use("/results", resultsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Online");
});
