//user import
import Job from "../models/job.model.js";
import User from "../models/user.model.js";

export const createJob = async (req, res) => {
  const {
    title,
    company,
    city,
    country,
    description,
    skills,
    education,
    experience,
    salary,
  } = req.body;

  //validation
  if (
    !title ||
    !company ||
    !city ||
    !country ||
    !description ||
    !skills ||
    !education ||
    !experience ||
    !salary
  ) {
    return res.status(400).json({ message: "All fields are required" });
  } else if (experience < 0) {
    return res
      .status(400)
      .json({ message: "Experience must be a positive number" });
  } else if (salary < 0) {
    return res
      .status(400)
      .json({ message: "Salary must be a positive number" });
  } else if (skills.length < 1) {
    return res.status(400).json({ message: "At least one skill is required" });
  } else if (education.length < 3 && education.length > 50) {
    return res
      .status(400)
      .json({ message: "Education must be between 3 and 50 characters" });
  } else if (title.length < 3 && title.length > 30) {
    return res
      .status(400)
      .json({ message: "Title must be between 3 and 30 characters" });
  } else if (company.length < 3 && company.length > 30) {
    return res
      .status(400)
      .json({ message: "Company name must be between 3 and 30 characters" });
  } else if (description.length < 10 && description.length > 200) {
    return res
      .status(400)
      .json({ message: "Description must be between 10 and 200 characters" });
  } else if (city.length < 3 && city.length > 30) {
    return res
      .status(400)
      .json({ message: "City must be between 3 and 30 characters" });
  } else if (country.length < 3 && country.length > 30) {
    return res
      .status(400)
      .json({ message: "Country must be between 3 and 30 characters" });
  }

  try {
    const job = await Job.create({
      title,
      company,
      city,
      country,
      description,
      skills,
      education,
      experience,
      salary,
      publisher: User._id,
    });

    return res.status(201).json({ job });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json({ jobs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
