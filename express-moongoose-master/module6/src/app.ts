import express, { Application, NextFunction, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();


const noteSchema = new Schema({
  title: String,
  content: String
});


const Note = model('Note', noteSchema);

app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "Learning Mongoose", 
    content: "Learning Advanced Mongoose"
  })

  await myNote.save();

  res.status(200).json({
    success: true,
    message: "Note Created Successfully",
    note: myNote
  })
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Advanced Note App");
});

export default app;
