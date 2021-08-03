// Importing thing we need
const express = require("express");

// Creating router
const router = express.Router();

// Routes

//  Routes for post

router.post("/post", (req, res) => {
  res.send({
    status: "Completed",
    message: "New post added",
  });
});

router.put("/post", (req, res) => {
  res.send({
    status: "Completed",
    message: "Post updated",
  });
});

router.patch("/post", (req, res) => {
  res.send({
    status: "Completed",
    message: "Post updated",
  });
});

router.delete("/post", (req, res) => {
  res.send({
    status: "Completed",
    message: "Post deleted",
  });
});

//  Routes for comments

router.post("/comments", (req, res) => {
  res.send({
    status: "Completed",
    message: "New comments added",
  });
});

router.put("/comments", (req, res) => {
  res.send({
    status: "Completed",
    message: "Comments updated",
  });
});

router.patch("/comments", (req, res) => {
  res.send({
    status: "Completed",
    message: "Comments updated",
  });
});

router.delete("/comments", (req, res) => {
  res.send({
    status: "Completed",
    message: "Comments deleted",
  });
});

//  Routes for todos

router.post("/todos", (req, res) => {
  res.send({
    status: "Completed",
    message: "New todos added",
  });
});

router.put("/todos", (req, res) => {
  res.send({
    status: "Completed",
    message: "Todos updated",
  });
});

router.patch("/todos", (req, res) => {
  res.send({
    status: "Completed",
    message: "Todos updated",
  });
});

router.delete("/todos", (req, res) => {
  res.send({
    status: "Completed",
    message: "Todos deleted",
  });
});

// Exporting routes
module.exports = router;
