const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150, // Limit the title length
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL of the featured image
      required: false,
    },
    author: {
      type: String,
      required: true,
      default: "Admin", // Default author
    },
    categories: [
      {
        type: String, // Blog categories or tags
        required: false,
      },
    ],
    publishedAt: {
      type: Date,
      default: Date.now, // Automatically set to the current date
    },
    isPublished: {
      type: Boolean,
      default: true, // Whether the blog is published or draft
    },
  },
  {
    timestamps: { createdAt: false, updatedAt: true }, // Only include updatedAt field
  }
);

export const Blog = mongoose.model("Blog", blogSchema);
