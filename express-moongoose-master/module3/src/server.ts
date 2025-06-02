import app from "./app";
import { client } from "./config/mongodb";

const port = 3000;
let server;


const bootstrap = async () => {
  await client.connect();
  console.log("connected to mongodb");
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

bootstrap();
