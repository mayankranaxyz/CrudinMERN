import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
    ProductName:String,
    Price: Number,
    Quantity: Number,
    Description:String
},{timestamps:true})
export default mongoose.model("Product", ProductSchema)