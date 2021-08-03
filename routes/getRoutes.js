// Importing thing we need
const express = require("express");
const db = require("../server");

// Creating router
const router = express.Router();

// Custom functions for sending data to client

const sendLimitedData = (category, limit, res) => {
  db.find({ id: category }, (err, docs) => {
    //   Checking if data
    if (Object.values(docs)[0] == undefined) {
      res.send({
        status: "Fail",
        errorMessage: "Something went wrong",
      });
    } else {
      const data = docs[0].data;
      // Filtering data
      const filterData = data.slice(0, limit);
      res.send({
        status: "Succes",
        data: filterData,
      });
    }
  });
};

const sendDatabyId = (category, id, res) => {
  // Getting from db 
  db.find({ id: category }, (err, docs) => {
    //   Checking if data
    if (Object.values(docs)[0] == undefined) {
      res.send({
        status: "Fail",
        errorMessage: "Something went wrong",
      });
    } 
    else {
      const data = docs[0].data;
      let filterData = [];
      // Filtering data
      if (category == "comments") {
        data.forEach((item) => {
          if (item.postId == id) {
            filterData.push(item);
          }
        });
      } 
      else {
        data.forEach((item) => {
          if (item.userId == id) {
            filterData.push(item);
          }
        });
      }
      // If data not found send error message 
      if (filterData.length == 0) {
        res.send({
          status: "Succes",
          errorMessage: "Id is exits",
        });
      } 
      else {
        res.send({
          status: "Succes",
          data: filterData,
        });
      }
    }
  });
};

// Routes

// Get todos
router.get("/todos", (req, res) => {
  // Extracting query
  let limit = req.query.limit;
  let userId = req.query.userId;
  // Checking if query is empty
  if (limit == undefined && userId == undefined) limit = 10;
  if (userId == undefined) userId = 10;
  // Checking if limit is number
  if (!isNaN(limit)) {
    sendLimitedData("todos", limit, res);
  } else if (!isNaN(userId)) {
    sendDatabyId("todos", userId, res);
  }
});

// Get post
router.get("/posts", (req, res) => {
  // Extracting query
  let limit = req.query.limit;
  let userId = req.query.userId;
  // Checking if query is empty
  if (limit == undefined && userId == undefined) limit = 10;
  if (userId == undefined) userId = 10;
  // Checking if limit is number
  if (!isNaN(limit)) {
    sendLimitedData("post", limit, res);
  } else if (!isNaN(userId)) {
    sendDatabyId("post", userId, res);
  }
});

// Get comments
router.get("/comments", (req, res) => {
  // Extracting query
  let limit = req.query.limit;
  let postId = req.query.postId;
  // Checking if query is empty
  if (limit == undefined && postId == undefined) limit = 10;
  if (postId == undefined) postId = 10;
  // Checking if limit is number
  if (!isNaN(limit)) {
    sendLimitedData("comments", limit, res);
  } else if (!isNaN(postId)) {
    sendDatabyId("comments", postId, res);
  }
});

// Exporting routes
module.exports = router;
