import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnect";
import AppointmentOptionsRouter from "./routes/AppointmentOptionsRoute";
import BookingRouter from "./routes/BookingsRoute";
import UserRouter from "./routes/UsersRoute";
import JwtRouter from "./routes/JwtRoute";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/appointmentOptions", AppointmentOptionsRouter);
app.use("/api/bookings", BookingRouter);
app.use("/api/users", UserRouter);
app.use("/api/jwt", JwtRouter);

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Database Connected & Running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log((err as Error).message);
  });
