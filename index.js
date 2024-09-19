const express = require("express");
const app = express();

//load config from env files
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json requst body
app.use(express.json());

//import router for TODO API
const todoRouters = require("./routes/todos");
//mount the todo API routes
app.use("/api/v1", todoRouters);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  //connect to the data base
  const dbConnect = require("./config/database");
  dbConnect();

  //default Route
  app.get("/", (req, res) => {
    res.send(`<h1>this is home page</h1>`);
  })