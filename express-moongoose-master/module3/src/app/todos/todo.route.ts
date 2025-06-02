import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";

export const todosRouter = express.Router();
 const db = client.db("todoDB");
  const collection = db.collection("todos");

// get all todos
todosRouter.get("/", async (req: Request, res: Response) => {
 

  const cursor = collection.find({});

  const todos = await cursor.toArray();

  res.json(todos);
});

todosRouter.post("/createTodo", async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;
  await collection.insertOne({
    title,
    description,
    priority,
    isCompleted: false,
  });

  const cursor = collection.find({});

  const todos = await cursor.toArray();

  res.json(todos);
});
