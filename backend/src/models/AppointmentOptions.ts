import mongoose, { Schema } from "mongoose";

const appointmentOptionsSchema = new Schema(
  {
    name: { type: String, required: [true, "Appointment name is missing"] },
    slots: [String],
  },
  { timestamps: true }
);

export default mongoose.model("AppointmentOption", appointmentOptionsSchema);
