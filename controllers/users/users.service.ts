import { users } from "../../models/users";
import {  hashSync } from 'bcrypt';
import path from 'path'
import fs from 'fs'

export const saveOrUpdate = async (req) => {
  try {
    const filePath = path.join(__dirname,"../../assets")
    req.body = await JSON.parse(req.body.values)
    if(req.file){
      const data = await users.findOne({email:req.body.email}).select('profile')
      if(data?.profile){
      fs.unlink(filePath+`/${data.profile}`,()=>{})

      }
    req.body.profile = req.file.filename

    }
    req.body.password = await hashSync(req.body.password,12)
      let user = await users.findOneAndUpdate({ email: req.body.email }, req.body, {
        useFindAndModify: false,
        new: true,
        upsert: true,
    });
    user = await user.toJSON()
    delete user.password
	return user;
  } catch (error) {
    throw Error(error.message);
  }
};
