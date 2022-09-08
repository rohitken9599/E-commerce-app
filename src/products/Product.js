import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({id,title,price,image}) => {
    return (
        <div className='col-3'>
            <div className="card h-100" >
                <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            Rs. {price}
                        </p>
                        <p>
                        <Link to={`/view/${id}`} className="btn btn-primary btn-sm">View</Link> 
                        </p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
            </div>
        </div>
    )
}

export default Product
