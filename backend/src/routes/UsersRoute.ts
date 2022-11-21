import express from "express";
import { GetUserByEmail, SetNewUser } from "../controllers/UsersController";
import checkExistingUser from "../middleware/checkexistingUser";

const router = express.Router();

router.post("/", checkExistingUser, SetNewUser);
router.get("/", GetUserByEmail);

export default router;
