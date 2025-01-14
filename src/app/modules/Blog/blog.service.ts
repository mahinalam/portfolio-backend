import AppError from "../../errors/AppError";
import { TImageFiles } from "../../interface/file";
import { Blog } from "./blog.model";

const createBlogIntoDB = async (payload: any) => {
  const result = await Blog.create(payload);

  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();

  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};
