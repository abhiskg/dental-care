import express from "express";
import {
  CreateNewAppointment,
  GetAllAvailableAppointments,
} from "../controllers/AppointmentRouteController";

const router = express.Router();

router.get("/", GetAllAvailableAppointments);

router.post("/", CreateNewAppointment);

export default router;
