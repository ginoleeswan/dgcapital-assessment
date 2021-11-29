const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const path = require("path");

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "dgcapital",
  multipleStatements: true,
});

app.post("/create", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const age = req.body.age;
  const birthdate = req.body.date;

  db.query(
    "INSERT INTO people (first_name, last_name, age, birthdate) VALUES (?,?,?,?)",
    [fName, lName, age, birthdate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/people", (req, res) => {
  db.query("SELECT * FROM people", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const updates = req.body.updates;

  const query = "UPDATE people SET ? WHERE id = ?";
  db.query(query, [updates, req.body.id], (err, result) => {
    if (err) {
      console.log(err.message);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM people WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log("Success!, your server is running on port 3001");
});
