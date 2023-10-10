import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Adduser = () => {
  const navigate = useNavigate()

   const[ProductName, setProductName] = useState()
   const[Price, setPrice] = useState()
   const[Quantity, setQuantity] = useState()
   const[Description, setDiscription] = useState()

 
  const HandleForm = async(e) => {
    e.preventDefault()
    const xyz = await axios.post('http://localhost:8080/api/create-product', {ProductName, Price, Quantity, Description})
    if(xyz){
      alert("Data Successfully Register");
      navigate("/alluser")
    }
  }


  return (
  <>
  <h2 className='text-center m-3'>Add User</h2>
  <form className='DataAddForm' onSubmit={HandleForm}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
      <input type="text" className="form-control" onChange={(e)=>setProductName(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
      <input type="number" className="form-control" onChange={(e)=> setPrice(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Quantity</label>
      <input type="number" className="form-control" onChange={(e)=>setQuantity(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <input type="text" className="form-control" onChange={(e)=>setDiscription(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary">Add Product</button>
  </form>
</>

  )
}


export default Adduser