import { nanoid } from "nanoid";
import { Url } from "../models/url.js";
 
async function generateShortUrl(req, res) {
  const shortId = nanoid(8);
  const body = req.body;

  if (!body.url)
    return res.status(400).json({ error: "valid URL is required" });

  await Url.create({
    shortID: shortId,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  res.redirect("/?id=" + shortId);
}

async function redirectToOriginalUrl(req, res) {
  const shortId = req.params.shortID;
  const entry = await Url.findOneAndUpdate(
    {
      shortID: shortId,
    },
    {
      $push: { visitHistory: { timestamp: Date.now() } },
    }
  );
  if (!entry) return res.status(404).json({ error: "Short URL not found" });

  res.status(200).redirect(entry.redirectUrl);
}

async function showAnalytics(req, res) {
  const shortId = req.params.shortID;
  const entry = await Url.findOne({
    shortID: shortId,
  });
  res.status(200).json({ visitCount: entry.visitHistory.length, Visit_History: entry.visitHistory });
}

export { generateShortUrl, redirectToOriginalUrl, showAnalytics };
