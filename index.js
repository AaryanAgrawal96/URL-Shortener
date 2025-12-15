import express, { urlencoded } from "express";
import { connectDB } from "./dbConnection.js";
import path from "path";
import { Url } from "./models/url.js";
import cookieParser from "cookie-parser";
import { restrictToLoggedInUser, checkAuth } from "./middleware/auth.js";

import { urlRouter } from "./routes/url.js";
import { staticRouter } from "./routes/staticRouter.js";
import { userRouter } from "./routes/user.js";

const app = express();
const PORT = 8001;

connectDB("mongodb://localhost:27017/url-shortener");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/url", restrictToLoggedInUser, urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
