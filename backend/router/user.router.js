import { Router } from "express";

//user import
import { signup, signin } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

export default userRouter;
