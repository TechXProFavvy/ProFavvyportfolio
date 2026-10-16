import express from "express";
import {
  getAllMessages,
  postMessage,
} from "../Controllers/MessageControllers.js";

export const router = express.Router();

router.get("/", getAllMessages);
router.post("/", postMessage);
