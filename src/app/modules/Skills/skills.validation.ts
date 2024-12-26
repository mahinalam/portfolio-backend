import { z } from "zod";

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Email is required." }),
  }),
});

export const SkillValidationSchema = {
  createSkillValidationSchema,
};
