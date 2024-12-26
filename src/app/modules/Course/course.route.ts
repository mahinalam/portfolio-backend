import express from "express";
import { CourseControllers } from "./course.controller";

const router = express.Router();

router.post(
  "/",

  //   validateRequest(SkillValidationSchema.createSkillValidationSchema),
  CourseControllers.createCourse
);

router.get(
  "/",
  //   validateRequest(AuthValidation.loginValidationSchema),
  CourseControllers.getAllCourses
);

export const CourseRoutes = router;
