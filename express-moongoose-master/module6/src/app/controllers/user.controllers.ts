import express, { Request, Response } from "express";
import Note from "../models/notes.models";
import { User } from "../models/user.models";


// add new note
export const addUser = async (req: Request, res: Response) => {
  const myUser = await req.body;

  const user = await User.create(myUser);

  res.status(200).json({
    success: true,
    message: "User Created Successfully",
    user: user,
  });
};

// get all notes
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};

// get single note
export const getSingleUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const user = await Note.findById(userId);

  res.status(200).json({
    success: true,
    user,
  });
};

// update single note
export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const myUser = req.body;

  // const note = await Note.findByIdAndUpdate(userId, myNote, { new: true });
  // const note = await Note.updateOne({ _id: userId }, myNote, { new: true });
  const user = await User.findOneAndUpdate({ _id: userId}, myUser, { new: true });
  res.status(200).json({
    success: true,
    message: "User Updated Successfuly",
    user,
  });
};


// delete single note
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  // const note = await Note.findByIdAndDelete(noteId);
  const user = await User.deleteOne({ _id: userId });
  // const note = await Note.findOneAndDelete({ _id: userId});
  res.status(200).json({
    success: true,
    message: "User Deleted Successfuly",
    user,
  });
};