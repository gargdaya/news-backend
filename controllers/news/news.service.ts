import { param } from "express-validator";
import { news } from "../../models/news";

export const getAll = async (params) => {
  
  try {
    if (params.category && params.author) {
      const categories = params.category.split(",");
      const author = params.author.split(",");
      return await news
        .find({
          $and: [
            { category: { $in: categories } },
            { author: { $in: author } },
          ],
        })
        .populate("category")
        .populate("author", "userName")
        .sort(`-${params.sortBy || "headline"}`);
    } else if (params.category || params.author) {
      const categories =
        params.category && params.category !== ""
          ? params.category.split(",")
          : undefined;
      const author =
        params.author && params.author !== ""
          ? params.author.split(",")
          : undefined;
      return await news
        .find({
          $or: [{ category: { $in: categories } }, { author: { $in: author } }],
        })
        .populate("category")
        .populate("author", "userName")
        .sort(`-${params.sortBy || "headline"}`);
    }
    const data = await news
      .find()
      .populate("category")
      .populate("author", "userName")
      .sort(`-${params.sortBy || "headline"}`);
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};
