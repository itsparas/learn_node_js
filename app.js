require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const saveUser = require("./controllers/todo");

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// connect database
connectDB();

//get request
app.get("/", (req, res) => res.send("Server up and running"));

//post request
app.post("/get", saveUser);

//listeing
app.listen(8002, () => {
  console.log(`server is running on 8002`);
});
