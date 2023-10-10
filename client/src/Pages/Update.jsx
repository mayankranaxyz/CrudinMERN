import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Update = () => {
const navigate = useNavigate()
const {id} = useParams()
const [product, setProduct] = useState([]);


useEffect(()=>{
myfun()},[])

const myfun = async () =>{
    const GetSingleProduct = await axios.get(`http://localhost:8080/api/get-single-product/${id}`)
    setProduct(GetSingleProduct.data.Product)
}

const updateProduct = async (e) =>{
    e.preventDefault();
    const result = await axios.put(`http://localhost:8080/api/update-product/`+id, product)
    if(result){
        navigate(`/alluser`)
    }
}

  return (
    <>
    <h2 className='text-center m-3'>Update Product</h2>
    <form className='DataAddForm' onSubmit={updateProduct}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
        <input type="text" value={product.ProductName} className="form-control" onChange={(e)=>setProduct({...product, ProductName: e.target.value})}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
        <input type="number" value={product.Price} className="form-control" onChange={(e)=> setProduct({...product, Price: e.target.value})}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Quantity</label>
        <input type="number" value={product.Quantity} className="form-control" onChange={(e)=>setProduct({...product, Quantity: e.target.value})}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
        <input type="text" value={product.Description} className="form-control" onChange={(e)=>setProduct({...product, Description: e.target.value})}/>
      </div>
      <button type="submit" className="btn btn-primary">Update Product</button>
    </form>
  </>
  )
}

export default Update