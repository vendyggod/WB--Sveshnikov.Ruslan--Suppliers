const jsonServer = require("json-server");
const { json } = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(json());
server.use(router);

// server.post("/supplies", (req, res) => {
//   const db = router.db;
//   const newItem = req.body;
//
//   db.get("supplies").insert(newItem, 0).write();
//
//   res.status(201).json(newItem);
// });

// Запуск сервера
server.listen(3001, () => {
  console.log("JSON Server запущен на http://localhost:3001");
});
