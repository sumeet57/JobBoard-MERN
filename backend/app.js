import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//user import
import userRouter from "./router/user.router.js";
import recruiterRouter from "./router/recruiter.router.js";
// import jobRouter from "./router/job.router.js";
import { getJobs } from "./controllers/job.controller.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user route
app.use("/users", userRouter);

//recruiter route
app.use("/recruiters", recruiterRouter);

// job route
app.use("/jobs", getJobs);

export default app;
