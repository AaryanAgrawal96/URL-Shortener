import express from "express";
import { Url } from "../models/url.js";
import { restrictTo } from "../middleware/auth.js";

const staticRouter = express.Router();

staticRouter.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allUrls =
    req.user && req.user.role === "ADMIN"
      ? await Url.find({}).populate({ path: "createdBy", select: "username" })
      : await Url.find({ createdBy: req.user._id }).populate({
          path: "createdBy",
          select: "username",
        });

  res.render("home", {
    id: req.query.id,
    urls: allUrls,
    user: req.user,
  });
});

staticRouter.get("/signup", async (req, res) => {
  return res.render("signup");
});

staticRouter.get("/login", async (req, res) => {
  return res.render("login");
});

export { staticRouter };
