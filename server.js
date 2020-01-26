const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

// app.use(cors());

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// import routes

const userRoutes = require("./routes/users");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

// connect to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

app.listen(process.env.PORT || 3000, () => {
  console.log("listen to port 3000");
});
