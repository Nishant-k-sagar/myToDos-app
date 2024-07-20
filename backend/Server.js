const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/ToDoRoutes.js");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/api", todoRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to MongoDB", err);
});
