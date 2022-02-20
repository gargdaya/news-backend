import { news } from "../../models/news";

export const getAll = async () => {
  try {
    const data = await news
      .find()
      .populate("category")
      .populate("author", "userName");
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

export const filterNews = async (params) => {
  try {
    const categories =
      params.category !== ":category" ? params.category.split(",") : undefined;
    const author =
      params.author !== ":author" ? params.author.split(",") : undefined;

    let newsList = [];
    if (categories && author) {
      newsList = await news
        .find({
          $and: [
            { category: { $in: categories } },
            { author: { $in: author } },
          ],
        })
        .populate("category")
        .populate("author", "userName")
        .sort(`-${params.sortBy || "headline"}`);
    } else if (categories || author) {
      newsList = await news
        .find({
          $or: [{ category: { $in: categories } }, { author: { $in: author } }],
        })
        .populate("category")
        .populate("author", "userName")
        .sort(`-${params.sortBy || "headline"}`);
    } else {
      newsList = await news
        .find({})
        .populate("category")
        .populate("author", "userName")
        .sort(`-${params.sortBy || "headline"}`);
    }

    return newsList;
  } catch (error) {
    throw Error(error.message);
  }
};
