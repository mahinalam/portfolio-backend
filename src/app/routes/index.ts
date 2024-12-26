import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { SkillRoutes } from "../modules/Skills/skills.route";
import { CourseRoutes } from "../modules/Course/course.route";
import { ProjectRoutes } from "../modules/Project/project.route";
import { BlogRoutes } from "../modules/Blog/blog.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
