import AppError from "../../errors/AppError";
import { Project } from "./project.model";

const createProjectIntoDB = async (payload: any) => {
  const result = await Project.create(payload);

  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find();

  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectsFromDB,
};
