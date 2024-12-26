import config from "../../config";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Request, Response } from "express";
import { SkillsServices } from "./skills.service";

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const { skills } = req.body;
  const result = await SkillsServices.createSkillsIntoDB(skills);
  console.log("body", req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skill created successfully!",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillsServices.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Skills retrieved successfully!",
    data: result,
  });
});

export const SkillControllers = {
  createSkill,
  getAllSkills,
};
