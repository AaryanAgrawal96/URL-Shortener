import express, { urlencoded } from "express";
import { urlRouter } from "./routes/url.js";
import { connectDB } from "./dbConnection.js";

const app = express();
const PORT = 8001;

connectDB("mongodb://localhost:27017/url-shortener");

app.use(express.urlencoded({ extended: true }));

app.use('/url', urlRouter);

app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`));