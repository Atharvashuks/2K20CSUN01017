const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

const trainRouter = require("./app/routes/trains.routes");
// // const characterizationRouter = require("./app/routes/char.routes");
// // const trainingRouter = require("./app/routes/training.routes");
// const instrumentRouter = require("./app/routes/instrument.routes");

app.use("/api/trains/", trainRouter);
// // app.use("/api/characterization/", characterizationRouter);
// // app.use("/api/training/", trainingRouter);
// app.use("/api/instrument/", instrumentRouter);

app.use("*", (req, res) => {
  res.status(201).json({
    message: "Welcome to test server",
  });
});

module.exports = app;
