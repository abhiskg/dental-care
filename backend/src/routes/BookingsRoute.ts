import express from "express";
import {
  CreateNewBooking,
  GetAllAvailableBookings,
} from "../controllers/BookingsController";
import VerifyJwt from "../middleware/VerifyJwt";

const router = express.Router();

router.post("/", CreateNewBooking);
router.get("/", VerifyJwt, GetAllAvailableBookings);

export default router;
