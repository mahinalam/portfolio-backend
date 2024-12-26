import AppError from "../../errors/AppError";
import { Course } from "./course.model";

const createCourseIntoDB = async (payload: any) => {
  // checking if the course is exist
  const course = await Course.findOne({ title: payload.title });

  if (course) {
    throw new AppError(404, "This skill is already exists!");
  }

  const result = await Course.create(payload);

  return result;
};

const getAllCoursesFromDB = async () => {
  const result = await Course.find();

  return result;
};

export const CourseService = {
  createCourseIntoDB,
  getAllCoursesFromDB,
};
