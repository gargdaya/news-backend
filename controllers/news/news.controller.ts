import { returnErrorResponse, returnSuccessResponse } from "../../helper"
import { filterNews, getAll } from "./news.service";


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