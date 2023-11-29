import React from 'react'

const CartItem = ({ cartItem }) => {

  return (
    <ul className='cart-list'>
        {
          cartItem && cartItem.map((product) => (
            <li key={product.product.id}>
              <a href="/" target="_blank" rel="noreferrer">
                <img
                  className="cart-source-icon"
                  src={require(`../../Assets/${product.product.by}.ico`)}
                  alt={`${product.by} icon`}
                  width="25px"
                  height="25px"
                />
              </a>
              <a className="cart-item" href="/">
                <img
                  className="cart-item-image"
                  src={product.product.images}
                  alt={product.product.name}
                />
                <div className="cart-item-detail">
                  <p>{product.product.name}</p>
                  <span>
                    <p className="product-price">
                      {product.product.price.lower} $
                      {product.product.price.upper !== null &&
                        ` to ${product.product.price.upper} $`}
                    </p>
                  </span>
                  <span>Brand: {product.product.brand.name}</span>
                  <br />
                  <span>Rating: {product.product.ratings}</span>
                </div>
              </a>
              {/* <p>{product.quantity}</p> */}
            </li>
          ))
        }
    </ul>  
  )
}

export default CartItem
