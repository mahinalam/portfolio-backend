import express from "express";
import { multerUpload } from "../../config/multer.config";
import validateImageFileRequest from "../../middlewares/validateImageFileRequest";
import { ImageFilesArrayZodSchema } from "../../zod/image.validation";
import { parseBody } from "../../middlewares/bodyParser";
import { BlogControllers } from "./blog.controller";

const router = express.Router();

router.post(
  "/",
  // auth(UserRole.VENDOR),
  multerUpload.fields([{ name: "blogImages" }]),
  // multerUpload.fields([{ name: 'itemImages' }]),
  validateImageFileRequest(ImageFilesArrayZodSchema),
  parseBody,
  BlogControllers.createBlog
);

router.get(
  "/",
  //   validateRequest(AuthValidation.loginValidationSchema),
  BlogControllers.getAllBlogs
);

export const BlogRoutes = router;
