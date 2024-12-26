import config from "../../config";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import { TImageFiles } from "../../interface/file";

const createBlog = catchAsync(async (req: Request, res: Response) => {
  if (!req.files) {
    throw new AppError(400, "Please upload an image");
  }
  const result = await BlogService.createBlogIntoDB(
    req.body,
    req.files as TImageFiles
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog Created successfuly!",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully!",
    data: result,
  });
});

export const BlogControllers = {
  createBlog,
  getAllBlogs,
};
