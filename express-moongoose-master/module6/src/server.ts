import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
require('dotenv').config();

const port = 3000;
let server: Server;


async function main() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lggjuua.mongodb.net/noteDB?retryWrites=true&w=majority&appName=Cluster0`);
    server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}


main()
