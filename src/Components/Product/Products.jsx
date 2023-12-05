import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchProduct from "../../Utils/Products/FetchProduct";
import Product from "./Product";

const Products = ({ accessToken, queryParams }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    var parameters = window.location.search.replace("?", "")
    if (queryParams) {
      parameters = new URLSearchParams(queryParams).toString()
      navigate({ search: parameters })
    } else {
      parameters = new URLSearchParams(window.location.search).toString()
    }

    const fetchData = async() => {
    const response = await FetchProduct(accessToken, parameters);
    if (response.ok) {
      setData(await response.json());
    }
  };

    fetchData();
  }, [accessToken, queryParams, page, navigate]);

  return (
    <div>
      {data && data.results ? (
        <section className='product-container'>
          <ul className='product'>
            {data.results && data.results.map((product) => (
              <Product
                key={product.id}
                accessToken={accessToken}
                product={product}
                on_cart={product.on_cart}
              />
            ))}
          </ul>
        </section>
      ) : (
        <p style={{ textAlign: "center", margin: "2em 0" }}>Loading...</p>
      )}
    </div>
  );
};

export default Products;
