import React from "react";

const Product = ({ product }) => {
  return (
    <li>
      <a className="cart-item" href={product.product.url}>
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
                ` to ${product.price.upper} $`}
            </p>
          </span>
          <span>Brand: {product.product.brand.name}</span>
          <br />
          <span>Rating: {product.product.ratings}</span>
        </div>
      </a>
      <p>{product.quantity}</p>
    </li>
  );
};

export default Product;
