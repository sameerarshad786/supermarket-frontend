import React from "react";
import AddToCart from "../../Utils/Carts/AddToCart";

const Product = ({ accessToken, product }) => {

  return (
    <li className="single-product">
      <a href={product.url} target="_blank" rel="noreferrer">
        <img
          className="product-source-icon"
          src={product.by === "not defined" ? require(`../../Assets/favicon.ico`) : require(`../../Assets/${product.by}.ico`)}
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
          <p>{product.name}</p><br />
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
      {
        product.on_cart === false ?
        <button className="add-to-cart" onClick={() => AddToCart(accessToken, product.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M464-596v-132H332v-32h132v-132h32v132h132v32H496v132h-32ZM276.095-131.384q-22.095 0-36.941-15.059-14.847-15.059-14.847-37.154 0-22.095 15.059-36.941 15.059-14.847 37.154-14.847 22.095 0 36.942 15.059 14.846 15.059 14.846 37.154 0 22.095-15.059 36.941-15.058 14.847-37.154 14.847Zm407.385 0q-22.095 0-36.942-15.059-14.846-15.059-14.846-37.154 0-22.095 15.059-36.941 15.058-14.847 37.154-14.847 22.095 0 36.941 15.059 14.847 15.059 14.847 37.154 0 22.095-15.059 36.941-15.059 14.847-37.154 14.847ZM88-812v-32h99.923l148.846 344.615h286.385q6.923 0 12.308-3.461 5.384-3.462 9.23-9.615L741.539-748h32.615L673.769-500.615Q667.077-486 654.16-476.692q-12.917 9.308-29.468 9.308H317l-46.615 81.23q-6.154 9.231-.385 20t17.308 10.769h448.385v32.001H288.308q-32 0-46.847-26.885-14.846-26.885.77-51.885l58.153-99.231L166.307-812H88Z"/></svg>
        </button>:
        ""
      }
    </li>
  );
};

export default Product;
