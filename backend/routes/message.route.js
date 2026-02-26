import express from "express"
import { createMessage, deleteMessage, getMessages } from "../controllers/message.controller.js"

const router = express.Router()

router.post("/message", createMessage)
router.get("/all-message", getMessages)
router.delete("/delete-message/:id", deleteMessage)


export default router