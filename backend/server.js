const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const port = process.env.PORT || 5000;

// Connecting to Database
connectDB();

// Initializing App
const app = express();

// App Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route Middleware
app.use("/api/todos", require("./routes/todoRoutes"));

// Error Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server Started at port ${port}`));
