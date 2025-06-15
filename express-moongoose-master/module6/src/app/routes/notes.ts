import express from "express"
import { addNotes, deleteNote, getNotes, getSingleNote, updateNote } from "../controllers/notes.controllers";
const notesRouter = express.Router()


notesRouter.post("/create-note", addNotes);
notesRouter.get("/", getNotes);
notesRouter.get("/:noteId", getSingleNote);
notesRouter.patch("/updateNote/:noteId", updateNote);
notesRouter.delete("/deleteNote/:noteId", deleteNote);


export default notesRouter;