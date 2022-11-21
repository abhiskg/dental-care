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

export const GetUserByEmail = async (req: Request, res: Response) => {
  try {
    const existingUser = await Users.findOne({ email: req.query.email });

    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      data: existingUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
