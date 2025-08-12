import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token:{type: String, unique:true},
    tokenId:{type:String, unique:true}
},{minimize:false})

export const tokenModel = mongoose.model.token || mongoose.model('token', tokenSchema);