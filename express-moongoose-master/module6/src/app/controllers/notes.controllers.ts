import { Request, Response } from "express";
import Note from "../models/notes.models";


// add new note
export const addNotes = async (req: Request, res: Response) => {
  const note = await req.body;

  // approuch-1 for creating a data with mongoose
  // const myNote = new Note(note);
  // await myNote.save();

  // approuch-2 for creating a data with mongoose
  const myNote = await Note.create(note);

  res.status(200).json({
    success: true,
    message: "Note Created Successfully",
    note: myNote,
  });
};

// get all notes
export const getNotes = async (req: Request, res: Response) => {
  const notes = await Note.find().populate("user");

  res.status(200).json({
    success: true,
    notes,
  });
};

// get single note
export const getSingleNote = async (req: Request, res: Response) => {
  const { noteId } = await req.params;

  const note = await Note.findById(noteId);

  res.status(200).json({
    success: true,
    note,
  });
};

// update single note
export const updateNote = async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const myNote = req.body;

  // const note = await Note.findByIdAndUpdate(noteId, myNote, { new: true });
  // const note = await Note.updateOne({ _id: noteId }, myNote, { new: true });
  const note = await Note.findOneAndUpdate({ _id: noteId}, myNote, { new: true });
  res.status(200).json({
    success: true,
    message: "Note Updated Successfuly",
    note,
  });
};


// delete single note
export const deleteNote = async (req: Request, res: Response) => {
  const { noteId } = req.params;

  // const note = await Note.findByIdAndDelete(noteId);
  const note = await Note.deleteOne({ _id: noteId });
  // const note = await Note.findOneAndDelete({ _id: noteId});
  res.status(200).json({
    success: true,
    message: "Note Deleted Successfuly",
    note,
  });
};