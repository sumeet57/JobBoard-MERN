import { Router } from "express";

//user import
import { signup, signin } from "../controllers/recruiter.controller.js";
import { createJob, getJobs } from "../controllers/job.controller.js";

const recruiterRouter = Router();

recruiterRouter.post("/signup", signup);

recruiterRouter.post("/signin", signin);

recruiterRouter.post("/create", createJob);

export default recruiterRouter;
