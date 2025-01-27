const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/affirmationsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema and Model
const affirmationSchema = new mongoose.Schema({
  Group: String,
  Goal: String,
  ShortAffirmation: String,
  MediumAffirmation: String,
  LongAffirmation: String,
});

const Affirmation = mongoose.model("Affirmation", affirmationSchema);

// API Endpoint to Fetch Groups and Goals
app.get("/api/groups", async (req, res) => {
  try {
    const groups = await Affirmation.aggregate([
      {
        $group: {
          _id: "$Group",
          goals: { $push: "$Goal" },
        },
      },
    ]);
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data from the database." });
  }
});

// Start the Server
app.listen(5003, () => {
  console.log("Server running on http://localhost:5003");
});
