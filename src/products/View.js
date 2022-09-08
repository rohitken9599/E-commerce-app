import React from 'react'
import { data } from '../data'
import {Link, useParams} from 'react-router-dom'

const View = () => {

  const param = useParams();

  const product = data.filter(prod => {
    return prod.id == param.id
  });

  console.log(product);

  const {id,title,price,image,description} = product[0];

  return (
    <div className='row' style={{marginTop:'40px'}}>
      <div className='col-4'>
       <img className="card-img-top" src={image} alt="Card image cap"  />
      </div>
      <div className='col-8'>
        <h4>{title}</h4>
        <p className='text-info'><strong>Rs. {price}</strong></p>
        
        <p>{description}</p>
        <p>
        <button className='btn btn-success btn-sm'>Add to cart</button> 
        <Link to="/" className='btn btn-warning btn-sm' style={{marginLeft:'10px'}}>Back</Link>
        </p>  
      </div>
    </div>
  )
}

export default View
