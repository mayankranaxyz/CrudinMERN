import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Alluser = () => {
  const[Product, setProduct] = useState([])
  useEffect(() => {
    myfun()
  },[])
  const myfun = async ()=>{
    const xyz = await axios.get(`http://localhost:8080/api/get-products`)
    if(xyz){
      setProduct(xyz.data.Products)
    }
  }
 const deletebyid = async (_id) =>{
  await axios.delete(`http://localhost:8080/api/delete-product/${_id}`)
  window.location.reload()
 }


  return (
    <div>
      <h2>All User</h2>
      {
      Product.map((value, index) =>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h2>{value._id}</h2>
            <h5 className="card-title">{value.ProductName}</h5>
            <p className="card-text">{value.Description}</p>
            <p className="card-text">{value.Quantity}</p>
            <Link to='#' onClick={()=>deletebyid(value._id)} className="btn btn-primary">Delete</Link>
            <Link to={`/update/${value._id}`} className="btn btn-primary">Update</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Alluser