import { Router } from "express";

//user import
import { signup, signin, getProfile } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

userRouter.post("/profile", getProfile);

export default userRouter;
