import mongoose, { Schema } from "mongoose";

const bookingsSchema = new Schema(
  {
    patientName: { type: String, required: [true, "Patient Name is required"] },
    userEmail: { type: String, required: [true, "User Email is required"] },
    appointmentDate: {
      type: String,
      required: [true, "Appointment Date is required"],
    },
    phone: { type: String, required: [true, "Phone nO is required"] },
    slot: { type: String, required: [true, "Slot is required"] },
    treatment: {
      type: String,
      required: [true, " Treatment field is required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bookings", bookingsSchema);
