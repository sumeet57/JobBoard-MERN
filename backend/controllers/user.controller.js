//user import
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, phone, city, country, password } = req.body;

  //validations
  if (!name || !email || !phone || !city || !country || !password) {
    return res.status(400).json({ error: "All fields are required" });
  } else if (password.length <= 6 && password.length >= 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  } else if (phone.length !== 10) {
    return res.status(400).json({ error: "Phone number must be 10 digits" });
  } else if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
    return res.status(400).json({ error: "Email is not valid" });
  } else if (city.length < 3 && city.length > 20) {
    return res
      .status(400)
      .json({ error: "City must be between 3 to 20 characters" });
  } else if (country.length < 3 && country.length > 20) {
    return res
      .status(400)
      .json({ error: "Country must be between 3 to 20 characters" });
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
      city,
      country,
      password: hashpassword,
    });

    await user.save();

    const token = user.generateAuthToken();

    res.status(201).json({ token });
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
  } else if (password.length <= 6 && password.length >= 12) {
    return res
      .status(400)
      .json({ error: "Password must be between 6 to 12 characters" });
  }

  //check if user exists
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ error: "User is not signup" });
  }

  //check password
  const isValid = await user.matchPassword(password);
  if (!isValid) {
    return res.status(400).json({ error: "Invalid password" });
  }

  //generate token

  const token = user.generateAuthToken();
  res.status(200).json({ token });
};

export const logout = async (req, res) => {
  res.status(200).json({ message: "User logout" });
};
