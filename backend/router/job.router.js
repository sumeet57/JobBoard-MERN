import { Router } from "express";

//user import
import {
  applyJob,
  createJob,
  getJobs,
  getJobsById,
} from "../controllers/job.controller.js";

const jobRouter = Router();

jobRouter.get("/all", getJobs);

jobRouter.post("/ById", getJobsById);

jobRouter.post("/apply", applyJob);

export default jobRouter;
