import { NextFunction, Request, Response } from "express";
import Users from "../models/Users";

const VerifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const decodedEmail = req.decoded.email;
  const user = await Users.findOne({ email: decodedEmail });
  if (user?.role !== "admin") {
    return res
      .status(403)
      .json({ success: false, message: "Forbidden Access" });
  }
  next();
};

export default VerifyAdmin;
