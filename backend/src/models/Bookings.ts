import mongoose, { Schema } from "mongoose";

const bookingsSchema = new Schema(
  {
    patient: { type: String, required: true },
    email: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    phone: { type: String, required: true },
    slot: { type: String, required: true },
    treatment: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Bookings", bookingsSchema);
