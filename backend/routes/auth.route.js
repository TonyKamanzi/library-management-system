import express from "express";
import {
  signup, login
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login)
// router.get("/logout", logoutUser);
// router.post("/login", authenticateUser);
// router.put("/edit/:id", updateUser)

export default router;
