import React from 'react'
import Product from './Product'
import { data } from '../data'

const List = () => {
  return (
    <div className='row'>
      {
        data.map(prd=> <Product key={prd.id} {...prd} />)
      }
      
    </div>
  )
}

export default List
