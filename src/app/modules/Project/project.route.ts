import express from "express";
import { ProjectControllers } from "./project.controller";

const router = express.Router();

router.post(
  "/",

  //   validateRequest(SkillValidationSchema.createSkillValidationSchema),
  ProjectControllers.createProject
);

router.get(
  "/",
  //   validateRequest(AuthValidation.loginValidationSchema),
  ProjectControllers.getAllProjects
);

export const ProjectRoutes = router;
