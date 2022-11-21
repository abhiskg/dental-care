import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Users from "../models/Users";
import * as dotenv from "dotenv";

dotenv.config();

export const ProvideJwtToken = async (req: Request, res: Response) => {
  const email = req.query.email;
  console.log(email);
  try {
    const existingUser = await Users.findOne({ email: req.query.email }).exec();
    console.log(existingUser);
    if (!existingUser) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN as string, {
      expiresIn: "1d",
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: (error as Error).message,
    });
  }
};
