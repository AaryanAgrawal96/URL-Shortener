import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortID: {
      type: String,
      unique: true,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    }
  },
  { timestamp: true }
);

const Url = mongoose.model("Url", urlSchema);

export { Url };
