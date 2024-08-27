// src/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./conifg/database.js");
const cityRoutes = require("./routes/cityRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8096;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(
  cors({
    origin: "*", // Allow all origins or specify specific origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes
app.use("/api", cityRoutes);

// Database connection
connectDatabase(MONGO_URI);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost/${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
