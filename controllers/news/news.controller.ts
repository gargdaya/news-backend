import { returnErrorResponse, returnSuccessResponse } from "../../helper"
import {  getAll } from "./news.service";


export const getNewsList = async(req,res)=>{
	try {
		
		const newsData = await getAll(req.query);
		return returnSuccessResponse("Success",newsData,res)
	} catch (error) {
		return returnErrorResponse(error.message,res)
	}
}

