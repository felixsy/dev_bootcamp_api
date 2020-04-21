const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

connectDB();

// Loading routes
const bootcamps = require("./routes/bootcamps");

//loading models
require("./models/Bootcamp");

const app = express();

app.use(express.json());

// Http logger middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//using the routes
app.use("/api/v1/bootcamps", bootcamps);

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
