import { NextFunction, Request, Response } from "express";
import Users from "../models/Users";
import jwt from "jsonwebtoken";

const CheckExistingUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.body.email;
  const existingUser = await Users.findOne({ email: req.body.email });
  if (existingUser) {
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN as string, {
      expiresIn: "1d",
    });
    return res.status(200).json({ success: true, token });
  }
  next();
};

export default CheckExistingUser;
