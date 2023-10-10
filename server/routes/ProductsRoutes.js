import express from 'express'
import { CreateProduct, DeleteSingleProduct, GetProducts, GetSingleProduct, UpdateProduct } from '../controller/productcontroller.js'

const router = express.Router()

router.post('/create-product', CreateProduct)
router.get('/get-products', GetProducts)
router.get('/get-single-product/:id', GetSingleProduct)
router.delete('/delete-product/:id', DeleteSingleProduct)
router.put('/update-product/:id', UpdateProduct)

export default router