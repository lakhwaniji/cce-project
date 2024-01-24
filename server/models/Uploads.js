const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  user_email: { type: String, required: true },
  category: { type: String, enum: ["faculty", "student"] },
  title: { type: String },
  description: { type: String },
  files: [String],
  timestamp: { type: Date, default: Date.now },
});

const Upload = mongoose.model("Upload", uploadSchema);

module.exports = Upload;
