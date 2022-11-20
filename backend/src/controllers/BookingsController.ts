import { Request, Response } from "express";
import Bookings from "../models/Bookings";

export const CreateNewBooking = async (req: Request, res: Response) => {
  const query = {
    appointmentDate: req.body.appointmentDate,
    userEmail: req.body.userEmail,
    treatment: req.body.treatment,
  };
  try {
    const bookedAppointments = await Bookings.find(query);
    if (bookedAppointments.length) {
      return res
        .status(403)
        .json({ success: false, error: "You are not alowed" });
    }

    const newBookings = await Bookings.create(req.body);
    res.status(200).json({
      success: true,
      data: newBookings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllAvailableBookings = async (req: Request, res: Response) => {
  try {
    const allAvailableBookings = await Bookings.find({});
    res.status(200).json({
      success: true,
      data: allAvailableBookings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
