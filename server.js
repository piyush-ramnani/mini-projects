const express = require("express");
const dotenv = require("dotenv");
const Model = require("./model");
const connectDB = require("./db");
const {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
} = require("./userController");

dotenv.config(); //to import environment variables
connectDB(); //To establish a DB connection

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json()); //To parse and use JSON data

//Browser page display
app.get("/", (req, res) => {
  res.send(`API is running`);
});

//--APIs--

//To make an entry in the DB
app.post("/calculate", createUser);

//To update a record in DB
app.put("/update", updateUser);

//To delete a record from DB
app.delete("/delete", deleteUser);

//Gets all the records in the DB
app.get("/get-all", getAllUsers);

app.listen(port, () => console.log(`Server started at port: ${port}`));
