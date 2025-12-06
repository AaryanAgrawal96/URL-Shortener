import express from "express";
import { generateShortUrl, redirectToOriginalUrl, showAnalytics } from "../controllers/url.js";

const urlRouter = express.Router();

urlRouter.route("/").post(generateShortUrl);

urlRouter.route("/:shortID").get(redirectToOriginalUrl);

urlRouter.route("/analytics/:shortID").get(showAnalytics);

export { urlRouter };
 