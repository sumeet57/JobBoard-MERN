import { Router } from "express";

//user import
import { signup, signin, getProfile, updateApplication, updateProfile } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

userRouter.post("/profile", getProfile);


userRouter.post("/application", updateApplication);

userRouter.post("/profile/update", updateProfile);

export default userRouter;
