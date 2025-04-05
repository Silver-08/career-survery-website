const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/careerSurveyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mongoose Schema
const surveySchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  location: String,
  profession: String,

  school_board: String,
  teaching_rating: Number,
  interest_encouraged: String,
  extra_activities: String,
  practical_exposure: String,

  career_counseling: String,
  career_exposure: String,
  real_projects: String,
  stream: String,
  college_ready: String,

  career_exploration: String,
  interview_aware: String,
  mentorship: String,
  sector_understanding: String,
  business_research_aware: String,
  networking_guidance: String,
  alternative_choice: String,

  ug_degree: String,
  ug_industry_match: String,
  ug_internship: String,
  ug_support_rating: Number,
  ug_freelance: String,

  pg_field: String,
  pg_alignment: String,
  pg_research: String,

  phd_field: String,
  phd_type: String,
  phd_resources: String,
  phd_career_clarity: String,
});

const Survey = mongoose.model("Survey", surveySchema);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.send(
      '<h2>Thank you for submitting the survey!</h2><a href="/">Go Back</a>'
    );
  } catch (err) {
    res.status(500).send("Error saving your response.");
  }
});

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
