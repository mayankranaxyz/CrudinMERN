import ProductSchema from "../models/ProductSchema.js";


export const CreateProduct = async (req, res) => {
    try {
        const { ProductName, Price, Quantity, Description } = req.body;

        if (!ProductName || !Price || !Quantity || !Description) {
            res.status(401).send({
                success: false,
                maessage: "false fill at fields"
            })
        }
        const result = await new ProductSchema({ ProductName, Price, Quantity, Description }).save();
        res.status(201).send({
            success: true,
            message: 'Create Product Successfully',
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Somthing went Wrong',
            error
        })

    }
}


export const GetProducts = async (req, res) => {
    try {
        const Products = await ProductSchema.find({})
        res.status(200).send({
            success:true,
            message:"Get All Data Successfully",
            Products 
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Somthing went Wrong",
            error
        })
    }
}


export const GetSingleProduct = async (req, res) => {
    try {
        const Product = await ProductSchema.findById({_id: req.params.id})
        res.status(200).send({
            success:true,
            message:"Data get Successfully",
            Product
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Somthing went wrong",
            error
        })
    }
}


export const DeleteSingleProduct = async (req, res) => {
    try {
        const product = await ProductSchema.findByIdAndDelete({_id: req.params.id})
        res.status(200).send({
            success:true,
            message:`${product.ProductName}Delete Successfully`
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:'somthing went wrong',
            error

        })

    }
}


export const UpdateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const UpdateProduct = req.body;

        const productupdate = await ProductSchema.findByIdAndUpdate( productId, UpdateProduct, {new: true})
        if(!productupdate){
            return res.status(404).send({
                message:'Product not Found'
            })
        }
        res.status(200).send({
            success:true,
            message: "Product Update Successfully",
            productupdate
        })

    } catch (error) {
        res.status(500).send({
            success:true,
            message:"Somthing Went Wrong",
            error
        })

    }
}