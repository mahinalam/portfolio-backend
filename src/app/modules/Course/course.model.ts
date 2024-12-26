import mongoose, { model } from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  provider: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Course = model("Course", CourseSchema);
