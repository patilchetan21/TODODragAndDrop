const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// create express app
const app = express();
const port = process.env.PORT || 5000;

// enable CORS
app.use(cors());
app.use(express.json());

// connect to MongoDB database
const uri = 'mongodb://localhost:27017/todo-list';
// const uri = process.env.MONGODB_URI;
mongoose.connect("mongodb://localhost:27017/todo-list");
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// define routes
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

// start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
