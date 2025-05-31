import express, { Application, Request, Response } from "express";



const app: Application = express();



app.get("/", (req: Request, res: Response) => {
    res.send("Your Server is Running")
})



export default app;


/**
 * Basic File structure
 * server - server handling like - starting, closing error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */