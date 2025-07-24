const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const Worker = require("./Worker");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.post("/api/workers", async (req, res) => {
  try {
    const newWorker = new Worker(req.body);
    await newWorker.save();
    res.status(201).json({ message: "Worker added successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/workers", async (req, res) => {
  const workers = await Worker.find();
  res.json(workers);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
