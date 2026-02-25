import express from "express"
import { createMessage, getMessages } from "../controllers/message.controller.js"

const router = express.Router()

router.post("/message", createMessage)
router.get("/all-message", getMessages)


export default router