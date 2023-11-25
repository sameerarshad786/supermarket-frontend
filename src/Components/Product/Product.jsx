import React from "react";

const Product = ({ product }) => {
  return (
    <li className="single-product">
      <a href={product.url} target="_blank">
        <img
          className="product-source-icon"
          src={require(`../../Assets/${product.by}.ico`)}
          alt={`${product.by} icon`}
          width="30px"
          height="30px"
        />
      </a>
      <a className="product-detail" href="/">
        <img
          className="product-image"
          src={product.images}
          alt={product.name}
        />
        <div className="product-text">
          <p>{product.name}</p>
          <span>
            <p>
              {product.price.lower} $
              {product.price.upper !== null &&
                ` to ${product.price.upper} $`}
            </p>
          </span>
          <span>Brand: {product.brand.name}</span>
          <span>Rating: {product.ratings}</span>
        </div>
      </a>
    </li>
  );
};

export default Product;
