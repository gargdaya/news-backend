import * as mongoose from "mongoose";
import { categorySchema } from "./category";

export const category = mongoose.model("categories", categorySchema);

const newsSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,
    },
    headline: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    author: {
      type:String,
    },
    content: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);


export const news = mongoose.model("news", newsSchema);
