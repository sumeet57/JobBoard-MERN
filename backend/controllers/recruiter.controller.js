//user import
import Recruiter from "../models/recruiter.model.js";
import Job from "../models/job.model.js";

export const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  //validations
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (password.length <= 6 && password.length >= 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  } else if (phone.length !== 10) {
    return res.status(400).json({ error: "Phone number must be 10 digits" });
  } else if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  //check if recruiter already exists
  const recruiterExists = await Recruiter.findOne({ email: email });
  if (recruiterExists) {
    return res.status(400).json({ error: "Recruiter already signup" });
  }

  //create recruiter
  try {
    const hashpassword = await Recruiter.hashPassword(password);
    const recruiter = await Recruiter.create({
      name,
      email,
      phone,
      password: hashpassword,
    });

    await recruiter.save();

    const recruiterid = recruiter._id;

    const token = recruiter.generateAuthToken();


    res.cookie("Rtoken", token)
      .status(200)
      .json({ token, recruiterid, message: "Recruiter signup successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  //validations
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (password.length <= 6 && password.length >= 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  } else if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  //check if recruiter exists
  const recruiter = await Recruiter.findOne({ email: email });
  if (!recruiter) {
    return res.status(400).json({ error: "Recruiter not found" });
  }

  //check if password matches
  const isMatch = await recruiter.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const recruiterid = recruiter._id;

  const token = recruiter.generateAuthToken();

  res.cookie("Rtoken", token)
    .status(200)
    .json({ token, recruiterid, message: "Recruiter signin successfully" });
};

export const logout = async (req, res) => {
  res.clearCookie("Rtoken");
  res.status(200).json({ message: "Recruiter logout" });
};

//job posted by recruiter

export const getPostedJobs = async (req, res) => {
  const { recruiterid } = req.body;

  try {
    const jobs = await Job.find({ recruiter: recruiterid });
    if (!jobs) {
      return res
        .status(404)
        .json({ error: "No jobs found for this recruiter" });
    }
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
