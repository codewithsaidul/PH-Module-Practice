import { model, Schema } from "mongoose";
import { IUser } from "../interface/user.interface";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "First Name must be minimum 3 character"],
      maxlength: [50, "First Name must be maximum 50 character"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Last Name must be minimum 3 character"],
      maxlength: [50, "Last Name must be maximum 50 character"],
    },
    age: { type: Number, required: true, min: [18, 'Age must be getter then 18, but got {VALUE}'], max: [32, 'Age must be less then 32, but got {VALUE}'] },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      trim: true,
    },
    password: { type: String, required: true },
    role: {
      type: String,
      uppercase: true,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model("User", userSchema);
