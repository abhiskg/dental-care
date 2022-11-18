import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
  return mongoose.connect(process.env.MONGO_URI as string, {
    dbName: "dental-care",
  });
};

export default dbConnect;
