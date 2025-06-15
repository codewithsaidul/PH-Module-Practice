import express, { Application, Request, Response } from "express";
import { notesRouter } from "./app/controllers/notes.controllers";
import router from "./app/routes";

const app: Application = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Advanced Note App");
});
app.use("/", router);

export default app;
