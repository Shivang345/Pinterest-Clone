const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("pin", pinSchema);