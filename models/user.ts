import mongoose, { Schema, models } from "mongoose";

const allowedRoles = ['ADMIN', 'USER']; // Define allowed roles

const userSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Role: {
      type: String,
      default: 'USER',
      enum: allowedRoles // Enforce allowed roles
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;