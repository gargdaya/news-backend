import { returnErrorResponse, returnSuccessResponse } from "../../helper";
import { saveOrUpdate } from "./users.service";

export const saveOrUpdateUser = async (req, res) => {
  try {
    const userData = await saveOrUpdate(req);
    return returnSuccessResponse(
      "User Profile Updated Successfully",
      userData,
      res
    );
  } catch (error) {
    return returnErrorResponse(error.message, res);
  }
};
