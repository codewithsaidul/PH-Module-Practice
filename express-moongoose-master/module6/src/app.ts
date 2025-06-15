import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();
app.use(express.json());

// note schema
const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "Not Provided" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "other"],
    default: "personal",
    pinned: { type: Boolean, default: false },
  },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "gray" },
  },
});

// note instance
const Note = model("Note", noteSchema);

// add new note
app.post("/notes/create-note", async (req: Request, res: Response) => {
  const note = await req.body;

  // approuch-1 for creating a data with mongoose
  // const myNote = new Note({
  //   title: "Learning Redux",
  //   tags: {
  //     label: "redux",
  //     color: "blue"
  //   }
  // })
  // await myNote.save();

  // approuch-2 for creating a data with mongoose
  const myNote = await Note.create(note);

  res.status(200).json({
    success: true,
    message: "Note Created Successfully",
    note: myNote,
  });
});

// get all notes
app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(200).json({
    success: true,
    notes,
  });
});

// get single note
app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const { noteId } = await req.params;

  const note = await Note.findById(noteId);

  res.status(200).json({
    success: true,
    note,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Advanced Note App");
});

export default app;
