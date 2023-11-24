import React from 'react'
import Product from '../Product/Product'

const CartItem = ({ cartItem }) => {

  return (
    <ul className='cart-list'>
        {
          cartItem && cartItem.map((product) => (
            <Product product={product} key={product.id} />
          ))
        }
    </ul>  
  )
}

export default CartItem
