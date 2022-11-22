import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const VerifyJwt = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ success: false, message: "Unauthorized Access" });
  }
  const token = authHeader?.split(" ")[1] as string;
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN as string,
    function (err, decoded) {
      if (err) {
        return res.status(403).json({ success: false, message: "Forbidden" });
      }
      req.decoded = decoded;
      next();
    }
  );
};

export default VerifyJwt;
