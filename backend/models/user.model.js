import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  appliedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  }],
  password: {
    type: String,
    required: true,
  },
  // application info
  summary: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    default: "",
  },
  skills: {
    type: [String],
    default: [""],
  },
  education: {
    type: [String],
    default: [""],
  },
  role : {
    type: String,
    default: "",
  },
  // social media

  linkedin: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
  portfolio: {
    type: String,
    default: "",
  }
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    process.env.JWT_SECRET
  );
  return token;
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const User = mongoose.model("User", userSchema);
export default User;
