const multer = require("multer");
const path = require("path");

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
};
