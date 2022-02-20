import { returnErrorResponse, returnSuccessResponse } from "../../helper"
import { getAll } from "./category.service"

export const getAllCategories = async(req,res)=>{
	try {
		const data = await getAll()
		return returnSuccessResponse("Success",data,res)
	} catch (error) {
		return returnErrorResponse(error.message,res)
	}
}