import { Request, Response } from "express";
import AppointmentOptions from "../models/AppointmentOptions";

export const GetAllAvailableAppointments = async (
  req: Request,
  res: Response
) => {
  try {
    const allAvailableAppointments = await AppointmentOptions.find({});
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
