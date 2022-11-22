import express from "express";
import {
  DeleteUser,
  GetAllUsers,
  SetNewUser,
  UpdateUserRole,
} from "../controllers/UsersController";
import CheckExistingUser from "../middleware/checkExistingUser";
import VerifyAdmin from "../middleware/VerifyAdmin";
import VerifyJwt from "../middleware/VerifyJwt";

const router = express.Router();

router.post("/", CheckExistingUser, SetNewUser);
router.get("/", GetAllUsers);
router.delete("/:id", VerifyJwt, VerifyAdmin, DeleteUser);
router.patch("/:id", VerifyJwt, VerifyAdmin, UpdateUserRole);

export default router;
