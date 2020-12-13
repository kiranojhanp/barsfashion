import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
