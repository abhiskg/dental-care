import { Request, Response } from "express";
import AppointmentOptions from "../models/AppointmentOptions";
import Bookings from "../models/Bookings";

export const GetAllAvailableAppointments = async (
  req: Request,
  res: Response
) => {
  try {
    const bookedAppointments = await Bookings.find({
      appointmentDate: req.query.date,
    });
    const allAvailableAppointments = await AppointmentOptions.find({});

    allAvailableAppointments.forEach((category) => {
      const categoryBooked = bookedAppointments.filter(
        (bookedAppointment) => bookedAppointment.treatment === category.name
      );
      const bookedSlot = categoryBooked.map((category) => category.slot);
      const remainingSlots = category.slots.filter(
        (slot) => !bookedSlot.includes(slot)
      );
      category.slots = remainingSlots;
    });

    res.status(200).json({
      success: true,
      data: allAvailableAppointments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const CreateNewAppointment = async (req: Request, res: Response) => {
  try {
    const newAppointment = await AppointmentOptions.create(req.body);
    res.status(200).json({
      success: true,
      data: newAppointment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
