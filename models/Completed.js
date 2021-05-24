const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String },
  pageCount: { type: Number },
  id: { type: String, unique: true },
  volumeInfo: {}
});

const Completed = mongoose.model("Completed", BookSchema);

module.exports = Completed;
