import express from "express";
import {
  signup, login, logout
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login)
router.get("/logout", logout);
// router.post("/login", authenticateUser);
// router.put("/edit/:id", updateUser)

export default router;
