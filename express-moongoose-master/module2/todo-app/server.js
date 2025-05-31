const http = require("http");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./todos.json");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  const url = new URL(req.url, `https://${req.headers.host}`);
  const pathName = url.pathname;

  // ================ get all todo
  if (pathName === "/todos" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "application/json",
      // "email": "ph@gmail.com"
    });

    // res.setHeader("content-type", "text/plain")
    // res.setHeader("email", "ph2@gmail.com")
    // res.statusCode = 205
    res.end(data);
  }
  //================================ add new todo
  else if (pathName === "/todos/createTodo" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { title, body } = JSON.parse(data);
      const createdAt = new Date().toLocaleString();

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);

      parseAllTodos.push({ title, body, createdAt });

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(JSON.stringify({ title, body, createdAt }, null, 2));
    });
  }
  // ==================== get single todo by title
  else if (pathName === "/todo" && req.method === "GET") {
    const title = url.searchParams.get("title");
    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    const parseData = JSON.parse(data);

    const todo = parseData.find((todo) => todo.title === title);
    res.end(JSON.stringify(todo));
  }
  //  update todo
  else if (pathName === "/todos/updatetodo" && req.method === "PATCH") {
    const title = url.searchParams.get("title");

    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { body } = JSON.parse(data);

      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
      parseAllTodos[todoIndex].body = body;

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end(
        JSON.stringify(
          { title, body, createdAt: parseAllTodos[todoIndex].createdAt },
          null,
          2
        )
      );
    });
  }
  //  delete todo
  else if (pathName === "/todos/deleteTodo" && req.method === "DELETE") {
    const title = url.searchParams.get("title");

    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const allTodos = fs.readFileSync(filePath, { encoding: "utf-8" });
      const parseAllTodos = JSON.parse(allTodos);
      const todoIndex = parseAllTodos.findIndex((todo) => todo.title === title);
      console.log(todoIndex);

      parseAllTodos.splice(todoIndex, 1);

      fs.writeFileSync(filePath, JSON.stringify(parseAllTodos, null, 2), {
        encoding: "utf-8",
      });
      res.end("deleted successfully");
    });
  } else {
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("server is running");
});
