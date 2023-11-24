import React, { useEffect, useState } from 'react'
import FetchCart from '../../Utils/FetchCart';
import CartItem from './CartItem';

const Cart = ({ accessToken }) => {
  const [data, setData] = useState();

  useEffect (() => {
    const fetchData = async() => {
      if (accessToken) {
        const response = await FetchCart(accessToken);
        if (response.ok) {
          setData(await response.json())
        }
      }
    }

    fetchData();
  }, [accessToken]);

  return (
    <section className='cart-container'>
      {
        data && data.cart_item ?
          (
            <div className='cart'>
              <CartItem cartItem={data.cart_item} />
            </div>
          ) : (
            <p>loading</p>
          )
      }
    </section>
  )
}

export default Cart
