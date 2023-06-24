// const http = require("http");
// const routes = require("./routes");
// console.log("texts");
// const server = http.createServer(routes);
// server.listen(3000);

const express = require("express");
const route = express();
const mysql = require("mysql");
const cors = require("cors");

route.use(cors());
route.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeesystem",
});

route.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Value inserted");
      }
    }
  );
});

route.get("/getEmployees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

route.put("/updateEmployee", (req, res) => {
  db.query(
    "UPDATE employees SET name = ?, age=?, country=?,position=?,wage=? WHERE id=?",
    [
      req.body.name,
      req.body.age,
      req.body.country,
      req.body.position,
      req.body.wage,
      req.body.id,
    ],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

route.delete("/deleteEmployee/:id", (req, res) => {
  const id = req.params.id;
  db.query("delete from employees where id =?", id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

route.listen("3001", () => {
  console.log("listening server on 3001");
});
