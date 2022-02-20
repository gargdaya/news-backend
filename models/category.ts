import * as mongoose from "mongoose";

export const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);



