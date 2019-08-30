const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose
  .connect("mongodb://mongodb/instarocket", { useNewUrlParser: true })
  .then(() => {
    console.log("#############################################");
    console.log("Connected to MongoDB");
    console.log("#############################################");
  })
  .catch(err => {
    console.log("#############################################");
    console.log(err);
    console.log("#############################################");
    process.exit(1); //quit the process
  });

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(require("./routes"));
server.listen(4000);
