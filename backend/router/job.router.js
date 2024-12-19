import { Router } from "express";

//user import
import {
  createJob,
  getJobs,
  getJobsById,
} from "../controllers/job.controller.js";

const jobRouter = Router();

jobRouter.get("/all", getJobs);

jobRouter.post("/ById", getJobsById);

export default jobRouter;
