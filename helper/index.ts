import { APIResponseType } from "../interfaces";
import multer from "multer";

export function returnSuccessResponse(message, data, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;
  responseData.data = data;
  return response.json(responseData);
}

export function returnErrorResponse(message, response): string {
  const responseData = {} as APIResponseType;
  responseData.message = message;

  return response.status(500).json(responseData);
}

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG)$/)) {
    req.fileValidationError = "Only image files are allowed!";
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};
export const upload = multer({
  limits: {
    fileSize: 3048576,
  },
  fileFilter: imageFilter,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./assets");
    },
    filename: function (req, file, cb) {
      const name = Date.now()+'-' + file.originalname;
      file.originalname = name;
      cb(null, name);
    },
  }),
});
