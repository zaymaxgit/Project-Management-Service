import express from "express";

export const router = express.Router();
import {
  home,
  user_reg,
  user_log,
  user_change,
} from "../controller/user_controller";
import { create_project, create_task } from "../controller/project_controller";

//user router
router.post("/reg", user_reg);
router.post("/log", user_log);
router.post("/change", user_change);

//project router
router.post("/create-project", create_project);
router.post("/create-task", create_task);

router.get("/", home);
