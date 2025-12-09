import express, { urlencoded } from "express";
import { urlRouter } from "./routes/url.js";
import { staticRouter } from "./routes/staticRouter.js";
import { connectDB } from "./dbConnection.js";
import path from "path";
import { Url } from "./models/url.js";

const app = express();
const PORT = 8001;

connectDB("mongodb://localhost:27017/url-shortener");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));

app.use("/url", urlRouter);
app.use("/", staticRouter);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
