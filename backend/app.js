import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//user import
import userRouter from "./router/user.router.js";
import recruiterRouter from "./router/recruiter.router.js";
// import jobRouter from "./router/job.router.js";
import jobRouter from "./router/job.router.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user route
app.use("/api/users", userRouter);

//recruiter route
app.use("/api/recruiters", recruiterRouter);

// job route
app.use("/api/jobs", jobRouter);

export default app;
