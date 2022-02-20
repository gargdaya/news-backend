import { returnErrorResponse, returnSuccessResponse } from "../../helper"
import { filterNews, getAll } from "./news.service";
import { check, validationResult } from 'express-validator';

export const saveUserValidation = [
	check('username').not().isEmpty().withMessage("Username is required"),
	
	check('email').not().isEmpty().withMessage("Email is required"),
	check('password').not().isEmpty().withMessage("Password is required"),
	check('password').isLength({ min: 8 }).withMessage("Password should be min 8 char"),
	check('firstName').isLength({ max: 100 }).withMessage("Name should not be greater than 100 chars"),
	check('email').isEmail().withMessage("Email is Invalid"),
	check('mobile').notEmpty().withMessage("Mobile is required"),
	check('dob').notEmpty().withMessage("Date of birth is required"),
	check('time').notEmpty().withMessage("Time of birth is required"),
	check('gender').notEmpty().withMessage("Gender is required"),
	check("maritalStatus").notEmpty().withMessage("Marital Status is required"),
	check("language").notEmpty().withMessage("Language is required")
]
export const getNewsList = async(req,res)=>{
	try {
		const newsData = await getAll();
		return returnSuccessResponse("Success",newsData,res)
	} catch (error) {
		return returnErrorResponse(error.message,res)
	}
}

export const getFilteredNews = async(req,res)=>{
	try {
		const newsData = await filterNews(req.params);
		return returnSuccessResponse("Success",newsData,res)
	} catch (error) {
		return returnErrorResponse(error.message,res)
	}
}