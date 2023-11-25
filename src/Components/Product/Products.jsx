import React, { useState, useEffect } from "react";
import FetchProduct from "../../Utils/FetchProduct";
import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState(`page=${1}`);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchProduct(queryParams);
      if (response.ok) {
        setData(await response.json());
      }
    };

    fetchData();
  }, [queryParams]);

  return (
    <div>
      {data && data.results ? (
        <section className='product-container'>
          <ul className='product'>
            {data.results && data.results.map((product) => (
              <Product product={product} key={product.id} />
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
