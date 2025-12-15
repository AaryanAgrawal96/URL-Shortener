import express from "express";
import { handleSignUp, handleLogin } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.route("/signup").post(handleSignUp);

userRouter.route("/login").post(handleLogin);

export { userRouter };
