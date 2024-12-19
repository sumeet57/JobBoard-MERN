import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const recruiterSchema = new mongoose.Schema({
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
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  password: {
    type: String,
    required: true,
  },
});

recruiterSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    process.env.JWT_SECRET
  );
  return token;
};

recruiterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

recruiterSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
export default Recruiter;
