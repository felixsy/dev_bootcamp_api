const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

// Loading routes
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");

//loading models
require("./models/Bootcamp");
require("./models/Course");

const app = express();

app.use(express.json());

// Http logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//using the routes
app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);

//Error handler middleware
app.use(errorHandler);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
});

// Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});
