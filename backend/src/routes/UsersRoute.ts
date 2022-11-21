import express from "express";
import { SetNewUser } from "../controllers/UsersController";

const router = express.Router();

router.post("/", SetNewUser);

export default router;
