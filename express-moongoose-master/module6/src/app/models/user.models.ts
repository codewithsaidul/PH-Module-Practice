import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import validator from "validator";
import {
  IAddress,
  IUser,
  UserInstanceMethod,
  UserStaticMethod,
} from "../interface/user.interface";
import Note from "./notes.models";

const addressSchema = new Schema<IAddress>(
  {
    street: String,
    city: String,
    country: String,
    zip: Number,
  },
  {
    _id: false,
  }
);

const userSchema = new Schema<IUser, UserStaticMethod, UserInstanceMethod>(
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
    age: {
      type: Number,
      required: true,
      min: [18, "Age must be getter then 18, but got {VALUE}"],
      max: [32, "Age must be less then 32, but got {VALUE}"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: [true, "Email already exists!"],
      required: true,
      trim: true,
      // validate: {
      //   validator: function (v) {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      //   },
      //   message: props => `${props.value} is not a valid email`
      //  }
      validate: [validator.isEmail, "{VALUE} isnt a valided email"],
    },
    password: { type: String, required: true },
    role: {
      type: String,
      uppercase: true,
      enum: {
        values: ["USER", "ADMIN"],
        message: "Provided rule is not valid.",
      },
      default: "USER",
    },
    address: { type: addressSchema },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// userSchema.static("hashPassword", async function hashPassword(pass: string) {
//   const password = await bcrypt.hash(pass, 10);
//   return password
// })

// userSchema.method("hashPassword", async function hashPassword(pass: string) {
//   const password = await bcrypt.hash(pass, 10);
//   return password
// })

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// document post hooks middleware
userSchema.post("save", function (doc) {
  console.log("%s has been saved successfully!", doc._id);
});

// query pre hook middleware
userSchema.pre("find", function (next) {
  next();
});

userSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    console.log(doc);
    await Note.deleteMany({ user: doc._id });
  }
});

export const User = model<IUser, UserStaticMethod>("User", userSchema);
