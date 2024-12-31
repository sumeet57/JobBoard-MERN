import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  education: {
    type: [String],
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
  },
  applicants: {
    type: Array,
    default: [],
  },
  applicantsNumber: {
    type: Number,
    default: 0,
  },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
