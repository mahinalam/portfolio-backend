import AppError from "../../errors/AppError";
import { Skill } from "./skills.model";

// const createSkillIntoDB = async (payload: any) => {
//   console.log("p", payload);
//   // checking if the user is exist
//   const skill = await Skill.findOne({ name: payload.name });
//   console.log("skill", skill);

//   if (skill) {
//     throw new AppError(404, "This skill is already exists!");
//   }

//   const result = await Skill.create(payload);

//   return result;
// };

const createSkillsIntoDB = async (payload: any) => {
  try {
    if (!Array.isArray(payload) || payload.length === 0) {
      throw new AppError(400, "Payload must be a non-empty array of skills.");
    }

    console.log("Received Payload:", payload);

    // Extract unique names from the payload
    const skillNames = payload.map((skill) => skill.name);

    // Find already existing skills by name
    const existingSkills = await Skill.find({
      name: { $in: skillNames },
    }).select("name");

    // Create a Set of existing skill names for fast lookup
    const existingSkillNames = new Set(
      existingSkills.map((skill) => skill.name)
    );

    // Filter out duplicate skills
    const uniqueSkills = payload.filter(
      (skill) => !existingSkillNames.has(skill.name)
    );

    if (uniqueSkills.length === 0) {
      throw new AppError(400, "All provided skills already exist!");
    }

    // Create the new skills in the database
    const createdSkills = await Skill.insertMany(uniqueSkills);
    console.log("Created Skills:", createdSkills);

    return createdSkills;
  } catch (error) {
    console.error("Error creating skills:", error);
    throw error;
  }
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find();

  return result;
};

export const SkillsServices = {
  createSkillsIntoDB,
  getAllSkillsFromDB,
};
