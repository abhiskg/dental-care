import { Request, Response } from "express";
import Users from "../models/Users";

export const SetNewUser = async (req: Request, res: Response) => {
  try {
    const newUser = await Users.create(req.body);
    res.status(200).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};

export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await Users.find({});

    res.status(200).json({
      success: true,
      data: allUsers,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
