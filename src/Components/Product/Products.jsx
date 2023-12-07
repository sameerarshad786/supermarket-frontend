import React, { useState, useEffect } from "react";
import FetchProduct from "../../Utils/Products/FetchProduct";
import Product from "./Product";

const Products = ({ accessToken, searchParams }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(`page=${1}`);

  useEffect(() => {
    const fetchData = async() => {
      const response = await FetchProduct(page, searchParams, accessToken);
      if (response.ok) {
        setData(await response.json());
      }
    };

    fetchData();
  }, [searchParams, accessToken, page]);

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
