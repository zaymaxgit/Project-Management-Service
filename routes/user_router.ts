import express from "express";

export const router = express.Router();
import {
  home,
  user_reg,
  user_log,
  user_change,
} from "../controller/user_controller";

router.post("/reg", user_reg);
router.post("/log", user_log);
router.post("/change", user_change);
router.get("/", home);
