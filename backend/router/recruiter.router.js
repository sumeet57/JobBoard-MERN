import { Router } from "express";

//user import
import {
  signup,
  signin,
  getPostedJobs,
} from "../controllers/recruiter.controller.js";
import {
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";

const recruiterRouter = Router();

recruiterRouter.post("/signup", signup);

recruiterRouter.post("/signin", signin);

recruiterRouter.post("/create", createJob);

// recruiterRouter.post("/update", updateJob);

// recruiterRouter.post("/delete", deleteJob);

recruiterRouter.post("/jobs", getPostedJobs);

export default recruiterRouter;
