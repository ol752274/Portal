require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Portal")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

app.listen(5001, () => console.log("Server running on port 5000"));
