import React, { useEffect, useState } from "react";
import FetchCart from "../../Utils/Carts/FetchCart";
import CartItem from "./CartItem";

const Cart = ({ accessToken }) => {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (accessToken) {
        const response = await FetchCart(accessToken);
        if (response.ok) {
          const data = await response.json();
          setItems(data.cart_item);
        }
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <section className="cart-container">
      {items ? (
        <div className="cart">
          <ul className="cart-list">
            {items &&
              items.map((product) => (
                <CartItem key={product.product.id} product={product.product} accessToken={accessToken} />
              ))}
          </ul>
        </div>
      ) : (
        <p>loading</p>
      )}
    </section>
  );
};

export default Cart;
