import mongoose, { model } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tag: {
    type: [String], // Array of strings for tags
    default: ["All", "Web"],
  },
  gitUrl: {
    type: String,
    required: true,
  },
  previewUrl: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Project = model("Project", ProjectSchema);
