//user import
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  //validations
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (password.length < 6 || password.length > 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  } else if (phone.length !== 10) {
    return res.status(400).json({ error: "Phone number must be 10 digits" });
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  //check if user already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(400).json({ error: "User already signup" });
  }

  //create user
  try {
    const hashpassword = await User.hashPassword(password);
    const user = await User.create({
      name,
      email,
      phone,
      password: hashpassword,
    });

    await user.save();
    const userid = user._id.toString();

    const token = user.generateAuthToken();


    res.cookie("token", token)
      .status(200)
      .json({ token, userid, profile: user,message: "User signup successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  //validations

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
    return res.status(400).json({ error: "Email is not valid" });
  } else if (password.length < 6 || password.length > 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  }

  //check if user exists
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ error: "User is not signup" });
  }
  const userid = user._id.toString();

  //check password
  const isValid = await user.matchPassword(password);
  if (!isValid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  //generate token

  const token = user.generateAuthToken();
  // res.cookie("token", token);
  res.cookie("token", token).status(200).json({ token, userid,profile: user, message: "User signin successfully" });
};

export const getProfile = async (req, res) => {
  const { id } = req.body;

  //validation
  if (!id) {
    return res.status(400).json({ message: "User id is required" });
  } else if (id.length != 24) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  try {
    const user = await User.findById(id);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateApplication = async (req, res) => {
  
  const { id, summary, experience, skills, education, role,linkedin, github, portfolio } = req.body;
  
  
  //validation
  if (!id || !summary || !experience || !skills || !education || !role || !linkedin || !github || !portfolio) {
    return res.status(400).json({ message: "All fields are required" });
  }else if(summary.length < 10 || summary.length > 120){
    return res.status(400).json({ message: "Summary must be between 10 to 120 characters" });
  }else if(skills.length < 1 || skills.length > 10){
    return res.status(400).json({ message: "Skills must be between 1 to 10" });  
  }else if(education.length < 1 || education.length > 5){
    return res.status(400).json({ message: "Education must be between 1 to 5" });  
  }else if(experience.length < 10 || experience.length > 120){
    return res.status(400).json({ message: "Experience must be between 10 to 120 characters" });
  }else if(role.length < 5 || role.length > 20){
    return res.status(400).json({ message: "Role must be between 5 to 20 characters" });
  }else if(linkedin.length < 5 || linkedin.length > 50){
    return res.status(400).json({ message: "Linkedin must be between 5 to 50 characters" });
  }else if(github.length < 5 || github.length > 50){
    return res.status(400).json({ message: "Github must be between 5 to 50 characters" });
  }else if(portfolio.length < 5 || portfolio.length > 50){
    return res.status(400).json({ message: "Portfolio must be between 5 to 50 characters" });
  }

  

  const user = await User.findById({ _id: id });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    user.summary = summary;
    user.experience = experience;
    user.skills = skills;
    user.education = education;
    user.role = role;
    user.linkedin = linkedin;
    user.github = github;
    user.portfolio = portfolio;

    await user.save();
    return res.status(200).json({ message: "Application updated successfully", profile: user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }


};

export const updateProfile = async (req, res) => {
  const { id, name, email, phone, city, country } = req.body;

  
  //validation
  if (!id || !name || !email || !phone) {
    console.log("Validation failed: All fields are required");
    return res.status(400).json({ message: "All fields are required" });
  } else if (name.length < 3 || name.length > 20) {
    console.log("Validation failed: Name must be between 3 to 20 characters");
    return res.status(400).json({ message: "Name must be between 3 to 20 characters" });
  } else if (phone.length > 10) {
    console.log("Validation failed: Phone number must be 10 digits");
    return res.status(400).json({ message: "Phone number must be 10 digits" });
  } else if (city.length > 30) {
    console.log("Validation failed: City must be between 3 to 30 characters");
    return res.status(400).json({ message: "City must be between 3 to 30 characters" });
  } else if (country.length > 30) {
    console.log("Validation failed: Country must be between 3 to 30 characters");
    return res.status(400).json({ message: "Country must be between 3 to 30 characters" });
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    console.log("Validation failed: Email is not valid");
    return res.status(400).json({ message: "Email is not valid" });
  }

  const user = await User.findById({ _id: id });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    user.name = name;
    user.email = email;
    user.phone = phone;
    user.city = city;
    user.country = country;

    await user.save();
    return res.status(200).json({ message: "Profile updated successfully", profile: user, userid: user._id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

};
