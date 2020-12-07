const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
// Sets up the Express App
const app = express();

var PORT = process.env.PORT || 3056;;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});
// Basic route that sends the user first to the index.html Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
//   route that sends the user first to the notes Page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
  
