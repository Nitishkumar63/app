const dotenv = require("dotenv");
dotenv.config();
require("../config/db");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const UserRoutes = require("../src/users/user.routes");
const helmet = require("helmet");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    preflightContinue: false,
    maxAge: 86400, // 24 hours
    maxAgeSeconds: 86400, // 24 hours in seconds
    exposedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const port = process.env.PORT || 8000;

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Spicez Gold API" });
});

app.use("/api/v1/users", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
