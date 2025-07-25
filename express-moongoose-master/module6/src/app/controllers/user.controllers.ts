import { Request, Response } from "express";
import { User } from "../models/user.models";
import { z } from "zod";
import bcrypt from "bcrypt"

const CreateUserZodShcema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

// add new User
export const addUser = async (req: Request, res: Response) => {
  try {

    // const myUser = await CreateUserZodShcema.parseAsync(req.body);
    const myUser = req.body;

     
    //  const pass = await bcrypt.hash(req.body.password, 10);
    //  myUser.password = pass;

    // TODO: Custom & Built in static method
    // const pass = await User.hashPassword(myUser.password);
    // myUser.password = pass

     const user = await User.create(myUser);

    // TODO: Custom & Built in instance method
    /* const user = new User(myUser);
    const pass = await user.hashPassword(myUser.password);
    user.password = pass;
    await user.save();
    */


    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      user: user,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

// get all Users
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};

// get single User
export const getSingleUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  res.status(200).json({
    success: true,
    user,
  });
};

// update single User
export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const myUser = req.body;

  // const user = await User.findByIdAndUpdate(userId, myUser, { new: true });
  // const user = await User.updateOne({ _id: userId }, myUser, { new: true });
  const user = await User.findOneAndUpdate({ _id: userId }, myUser, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "User Updated Successfuly",
    user,
  });
};

// delete single User
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  // const user = await User.findByIdAndDelete(UserId);
  // const user = await User.deleteOne({ _id: userId });

  const user = await User.findOneAndDelete({ _id: userId});

  
  res.status(200).json({
    success: true,
    message: "User Deleted Successfuly",
    user,
  });
};
