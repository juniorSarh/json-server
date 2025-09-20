const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.js
const jsonServer = require("json-server");
const { v4: uuidv4 } = require("uuid");


server.use(middlewares);
server.use(jsonServer.bodyParser);

// Auto-generate random id
server.post("/jobs", (req, res, next) => {
  if (!req.body.id) {
    req.body.id = uuidv4().slice(0, 4); // short random ID like "f01d"
  }
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});


server.use(middlewares);
server.use(router);

server.listen(port);