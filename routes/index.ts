import { Router } from "express";
import {
  getAllCategories,
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


export default webRouter;
