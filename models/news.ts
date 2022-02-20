import * as mongoose from "mongoose";




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
