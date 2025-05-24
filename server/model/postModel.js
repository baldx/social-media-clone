// models/postModel.js
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({ //schema or template for post in feed
  title: { type: String, required: true },
  description: { type: String, required: true },
  filePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Post', postSchema);