import express from "express";
import { Url } from "../models/url.js";

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  const allUrls = await Url.find({});
  res.render("home", {
    id: req.query.id,
    urls: allUrls,
  });
});

export { staticRouter };
