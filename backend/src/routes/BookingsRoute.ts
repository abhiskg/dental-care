import express from "express";
import {
  CreateNewBooking,
  GetAllAvailableBookings,
} from "../controllers/BookingsController";

const router = express.Router();

router.post("/", CreateNewBooking);
router.get("/", GetAllAvailableBookings);

export default router;
