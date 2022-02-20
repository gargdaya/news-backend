import * as mongoose from "mongoose";

 const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);



export const category = mongoose.model("categories", categorySchema);