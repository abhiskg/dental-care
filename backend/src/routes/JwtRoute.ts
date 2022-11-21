import express from "express";
import { ProvideJwtToken } from "../controllers/JwtController";

const router = express.Router();

router.get("/", ProvideJwtToken);

export default router;
