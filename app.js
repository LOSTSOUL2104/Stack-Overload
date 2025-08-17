require("dotenv").config();

const express = require("express");


const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const threadRoutes = require("./routes/threadRoutes");
console.log("ENV MONGO_URI:", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api/threads", threadRoutes);


module.exports = app;
