import React, { useState, useEffect } from "react";
import Product from "./Product";
import InfiniteScroll from 'react-infinite-scroll-component';

const Products = ({ accessToken, searchParams }) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false)

  const fetchData = async (removeStates) => {

    if (!removeStates) {
      searchParams.set("page", page)
    }
  
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}products/list/?${searchParams}`);
      const data = await response.json();

      setHasMore(data.next !== null);
      if (removeStates) {
        setItems(data.results)
        setPage(1);
      } else {
        setItems(prevItems => [...prevItems, ...data.results]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    var removeStates = false
    if (searchParams.get("search") || searchParams.get("category")) {
      removeStates = true;
    }
    fetchData(removeStates);
  }, [searchParams]);

  return (
    <div>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<p style={{ textAlign: "center", margin: "2em 0" }}>Loading...</p>}
        endMessage={<p style={{ textAlign: "center", margin: "2em 0" }}>No more data to load.</p>}
      >
        <section className='product-container'>
          <ul className='product'>
            {items && items.map((product, index) => 
              <Product
                key={index}
                accessToken={accessToken}
                product={product}
                on_cart={product.on_cart}
              />
            )}
          </ul>
        </section>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
