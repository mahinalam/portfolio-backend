import mongoose, { model } from "mongoose";

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  proficiency: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  createdAt: { type: Date, default: Date.now },
});

export const Skill = model("Skill", SkillSchema);
