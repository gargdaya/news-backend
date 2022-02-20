import { category } from "../../models/category";

export const getAll = async () => {
  try {
    return await category.find({});
  } catch (error) {
    throw Error(error.message);
  }
};
