import express from "express";
import { GetAllUsers, SetNewUser } from "../controllers/UsersController";
import CheckExistingUser from "../middleware/checkExistingUser";

const router = express.Router();

router.post("/", CheckExistingUser, SetNewUser);
router.get("/", GetAllUsers);

export default router;
