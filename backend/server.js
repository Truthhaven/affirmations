const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
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

// Route to Fetch Groups and Goals
app.get("/api/groups", async (req, res) => {
  try {
    const groups = await Affirmation.aggregate([
      {
        $group: {
          _id: "$Group", // Group by the "Group" field
          goals: { $push: "$Goal" }, // Collect all "Goal" values for each group
        },
      },
    ]);
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch groups" });
  }
});

// Route to Fetch Affirmations by Goal
app.get("/api/affirmations", async (req, res) => {
  const { goal } = req.query; // Extract the goal from the query string

  try {
    const affirmation = await Affirmation.findOne({ Goal: goal });
    if (affirmation) {
      res.status(200).json(affirmation);
    } else {
      res.status(404).json({ error: "Affirmation not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch affirmation" });
  }
});

// Start the Server
const PORT = 5003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
