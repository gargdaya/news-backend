import { Router } from "express";
import {
  getAllCategories,
  getFilteredNews,
  getNewsList,
  saveOrUpdateUser,
  
} from "../controllers";
import { upload } from "../helper";

const webRouter = Router();

webRouter.route("/categories").get(getAllCategories);

webRouter
  .route("/user")
  .put(upload.single("profile"), saveOrUpdateUser);
webRouter.route("/news").get(getNewsList);
webRouter.route("/news/:category?/:author?/:sortBy?").get(getFilteredNews);

export default webRouter;
