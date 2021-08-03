// Importing we need
const express = require("express");
const path = require("path");
const cors = require("cors");
const Datastore = require("nedb");

// Creating database
const db = new Datastore({ filename: "db/database.db", autoload: true });

// Exporting db
module.exports = db;

// Creating app
const app = express();

// Routes & Middleware
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(cors());

const getRoutes = require("./routes/getRoutes");
const postRoutes = require("./routes/postRoutes");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.use("/api/", getRoutes);
app.use("/api/", postRoutes);

// Creating port
const port = process.env.Port || 3000;

// Listening to port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
