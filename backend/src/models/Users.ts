import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  email: { type: String, required: [true, "Email is required"], unique: true },
});

export default mongoose.model("Users", usersSchema);
