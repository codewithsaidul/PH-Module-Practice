import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./app/todos/todo.route";

const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("I'm Custom Middleware");
    next()
  },
  (req: Request, res: Response) => {
    res.send("Welcome to Todo's App");
  }
);

export default app;

/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
