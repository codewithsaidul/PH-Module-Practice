import express from "express"
import { addNotes, deleteNote, getNotes, getSingleNote, updateNote } from "../controllers/notes.controllers";
const notesRouter = express.Router()


notesRouter.post("/notes/create-note", addNotes);
notesRouter.get("/notes", getNotes);
notesRouter.get("/notes/:noteId", getSingleNote);
notesRouter.patch("/notes/updateNote/:noteId", updateNote);
notesRouter.delete("/notes/deleteNote/:noteId", deleteNote);


export default notesRouter;