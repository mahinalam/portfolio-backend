import express from "express";
import { USER_ROLE } from "../User/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { SkillControllers } from "./skills.controller";
import { SkillValidationSchema } from "./skills.validation";

const router = express.Router();

router.post(
  "/",

  //   validateRequest(SkillValidationSchema.createSkillValidationSchema),
  SkillControllers.createSkill
);

router.get(
  "/",
  //   validateRequest(AuthValidation.loginValidationSchema),
  SkillControllers.getAllSkills
);

export const SkillRoutes = router;
