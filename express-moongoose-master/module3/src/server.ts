import app from "./app";

const port = 3000;
let server;

const bootstrap = async () => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};



bootstrap();