import express from "express";
import { Url } from "../models/url.js";

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allUrls = await Url.find({ createdBy: req.user._id });
  res.render("home", {
    id: req.query.id,
    urls: allUrls,
  });
});

staticRouter.get("/signup", async (req, res) => {
  return res.render("signup");
});

staticRouter.get("/login", async (req, res) => {
  return res.render("login");
});

export { staticRouter };
