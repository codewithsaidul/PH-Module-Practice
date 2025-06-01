import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const todosRouter = express.Router();

const filePath = path.join(__dirname, "../../../db/todos.json");
const data = fs.readFileSync(filePath, { encoding: "utf-8" });


// get all todos
todosRouter.get("/", (req: Request, res: Response) => {
  res.send(data);
});




todosRouter.post("/createTodo", (req: Request, res: Response) => {
  const { title, body } = req.body;

  res.send({
    message: "Create a new todo",
    data: {
        title, body
    }
  });
});
