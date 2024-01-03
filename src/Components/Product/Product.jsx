import React, { useState } from "react";
import AddToCart from "../../Utils/Carts/AddToCart";
import RemoveFromCart from "../../Utils/Carts/RemoveFromCart";
import { useNavigate } from "react-router-dom";

const Product = ({ accessToken, product, on_cart }) => {
  const [onCart, setOnCart] = useState(on_cart);
  const navigate = useNavigate();

  return (
    <li className="single-product">
      <a href={product.url} target="_blank" rel="noreferrer">
        <img
          className="product-source-icon"
          src={require(`../../Assets/${product.by}.ico`)}
          alt={`${product.by} icon`}
          width="30px"
          height="30px"
        />
      </a>
      <a className="product-detail" href={`/product/${product.id}/`}>
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
          </span><br />
          <span>Brand: {product.brand.name}</span><br />
          <span>Rating: {product.ratings}</span>
        </div>
      </a>
      {
        onCart ?
        <button
          className="cart-options"
          onClick={
            () => RemoveFromCart(accessToken, product.id, setOnCart)
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M616.231-467.384h-22.385l-32-32.001H637l82-195.077q4.615-8.461.385-14.999Q715.154-716 706.692-716H345.231l-32-32h417.231q16.014 0 23.046 12.923 7.031 12.923.492 27.231L673.397-500.76q-6.32 16.299-18.166 24.837-11.846 8.539-39 8.539Zm-340.419 336q-21.803 0-36.654-14.851-14.851-14.851-14.851-36.654 0-21.803 14.851-37.149 14.851-15.347 36.654-15.347 21.803 0 37.15 15.347 15.346 15.346 15.346 37.149t-15.346 36.654q-15.347 14.851-37.15 14.851Zm518.496 12.307-201.77-204.307H269.846q-31.347 0-46.789-26.539-15.442-26.538.712-53.769l67.385-108.462L199.385-714l-81.847-81.846 23.308-23.308 676.77 677.77-23.308 22.307Zm-234.77-236.308-112-111.999H301.615l-49.692 81.23q-6.154 11.539-.384 21.154 5.769 9.615 17.307 9.615h290.692Zm77.462-144h-75.154H637Zm37.48 368.001q-21.326 0-36.057-14.851-14.731-14.851-14.731-36.654 0-21.803 14.731-37.149 14.731-15.347 35.769-15.347 21.039 0 36.77 13.347 15.731 13.346 15.731 34.653 0 24.308-15.444 40.154-15.443 15.847-36.769 15.847Z"/></svg>
        </button> :
        <button
          className="cart-options"
          onClick={
            accessToken ?
            () => AddToCart(accessToken, product.id, setOnCart) :
            () => navigate("/login/")
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M464-596v-132H332v-32h132v-132h32v132h132v32H496v132h-32ZM276.095-131.384q-22.095 0-36.941-15.059-14.847-15.059-14.847-37.154 0-22.095 15.059-36.941 15.059-14.847 37.154-14.847 22.095 0 36.942 15.059 14.846 15.059 14.846 37.154 0 22.095-15.059 36.941-15.058 14.847-37.154 14.847Zm407.385 0q-22.095 0-36.942-15.059-14.846-15.059-14.846-37.154 0-22.095 15.059-36.941 15.058-14.847 37.154-14.847 22.095 0 36.941 15.059 14.847 15.059 14.847 37.154 0 22.095-15.059 36.941-15.059 14.847-37.154 14.847ZM88-812v-32h99.923l148.846 344.615h286.385q6.923 0 12.308-3.461 5.384-3.462 9.23-9.615L741.539-748h32.615L673.769-500.615Q667.077-486 654.16-476.692q-12.917 9.308-29.468 9.308H317l-46.615 81.23q-6.154 9.231-.385 20t17.308 10.769h448.385v32.001H288.308q-32 0-46.847-26.885-14.846-26.885.77-51.885l58.153-99.231L166.307-812H88Z"/></svg>
        </button>
      }
    </li>
  );
};

export default Product;
