const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "search_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Route to fetch all names
app.get("/api/names", (req, res) => {
  db.query("SELECT name FROM names", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results.map(row => row.name));
  });
});

// Route to save search history
app.post("/api/search", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  db.query("INSERT INTO search_history (name) VALUES (?)", [name], err => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Search recorded" });
  });
});

// Route to fetch search history
app.get("/api/history", (req, res) => {
  db.query("SELECT * FROM search_history ORDER BY searched_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
