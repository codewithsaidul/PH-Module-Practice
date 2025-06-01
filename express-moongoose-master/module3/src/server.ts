import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

const port = 3000;
let server;

const uri =
  "mongodb+srv://newsAdmin:Lr7GNjEru2Ffub4G@cluster0.lggjuua.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("connected to mongodb");
  const db =  await client.db("todoDB");
  const collection = await db.collection("todos").insertOne({ title: "MongoDB", body: "Learning MongoDB"})
  console.log(collection)
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

bootstrap();
