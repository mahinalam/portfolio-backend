import express from "express";
import { multerUpload } from "../../config/multer.config";
import validateImageFileRequest from "../../middlewares/validateImageFileRequest";
import { ImageFilesArrayZodSchema } from "../../zod/image.validation";
import { parseBody } from "../../middlewares/bodyParser";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

router.post("/", BlogControllers.createBlog);

router.get(
  "/",
  //   validateRequest(AuthValidation.loginValidationSchema),
  BlogControllers.getAllBlogs
);

export const BlogRoutes = router;
