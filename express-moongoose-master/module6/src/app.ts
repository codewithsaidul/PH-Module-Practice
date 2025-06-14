import express, { Application, NextFunction, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Advanced Note App");
});

export default app;
