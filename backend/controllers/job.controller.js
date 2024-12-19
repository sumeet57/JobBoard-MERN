//user import
import Job from "../models/job.model.js";
import Recruiter from "../models/recruiter.model.js";
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
    publisher,
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
    !salary ||
    !publisher
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

  //find recruiter
  const recruiter = await Recruiter.findById(publisher);
  if (!recruiter) {
    return res.status(400).json({ message: "Recruiter not found" });
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
      publisher: Recruiter._id,
    });

    const jobid = job._id.toString();

    return res.status(200).json({ jobid });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    return res.status(200).json({ jobs });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// get job by id
export const getJobsById = async (req, res) => {
  const { id } = req.body;

  //validation
  if (!id) {
    return res.status(400).json({ message: "Job id is required" });
  } else if (id.length != 24) {
    return res.status(400).json({ message: "Invalid job id" });
  }

  try {
    const job = await Job.findById(id);
    return res.status(200).json({ job });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//update job

export const updateJob = async (req, res) => {
  const {
    id,
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
    !id ||
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
  } else if (id.length != 24) {
    return res.status(400).json({ message: "Invalid job id" });
  }

  try {
    const job = await Job.findByIdAndUpdate(id, {
      title,
      company,
      city,
      country,
      description,
      skills,
      education,
      experience,
      salary,
    });

    return res.status(201).json({ job });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//delete job

export const deleteJob = async (req, res) => {
  const { id } = req.body;

  //validation
  if (!id) {
    return res.status(400).json({ message: "Job id is required" });
  } else if (id.length != 24) {
    return res.status(400).json({ message: "Invalid job id" });
  }

  try {
    const job = await Job.findByIdAndDelete(id);
    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
