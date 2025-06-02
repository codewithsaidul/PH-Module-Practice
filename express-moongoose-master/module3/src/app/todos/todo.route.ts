import express, { Request, Response } from "express";
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

export const todosRouter = express.Router();
 const db = client.db("todoDB");
  const collection = db.collection("todos");

// get all todos
todosRouter.get("/", async (req: Request, res: Response) => {
 

  const cursor = collection.find({});

  const todos = await cursor.toArray();

  res.json(todos);
});


// get a single todo by id
todosRouter.get("/:id", async (req: Request, res: Response) => {
  const todoId = req.params.id

  // console.log(todoId)

  const query = { _id: new ObjectId(todoId)}

  const todos = await collection.findOne(query);

// console.log(todos)

  // const todos = await cursor.toArray();

  res.send(todos);
});


// create a new todo
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
