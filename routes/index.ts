import { Router } from "express";

import {
  getFilteredNews,
  getNewsList,
  saveOrUpdateUser,
  saveUserValidation,
} from "../controllers";
import { upload } from "../helper";

const webRouter = Router();

webRouter
  .route("/user")
  .put(saveUserValidation, upload.single("profile"), saveOrUpdateUser);
webRouter.route("/news").get(getNewsList);
webRouter.route("/news/:category?/:author?/:sortBy?").get(getFilteredNews);

export default webRouter;
