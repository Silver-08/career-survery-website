const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: String,
  phone: String,
  city: String,
  educationLevel: String,
  currentSkills: [String],
  careerInterest: String,
  willingToLearn: Boolean,
  preferredLearningStyle: String,
  challengesFaced: String,
  feedback: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
