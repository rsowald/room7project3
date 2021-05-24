const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String  },
  pageCount: { type: Number },
  id: { type: String, unique: true },
  volumeInfo: {}
});

const Enqueued = mongoose.model("Enqueued", BookSchema);

module.exports = Enqueued;
