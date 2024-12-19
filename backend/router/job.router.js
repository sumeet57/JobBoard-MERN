import { Router } from "express";

//user import
import { createJob } from "../controllers/job.controller.js";

const jobRouter = Router();

jobRouter.post("/create", createJob);

export default jobRouter;
