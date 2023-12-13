import React, { useState, useEffect } from "react";
import FetchCategories from "../../Utils/Categories/FetchCategories";

const Categories = ({ setSearchParams }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchCategories();
      if (response.ok) {
        setData(await response.json());
      }
    };

    fetchData();
  }, []);

  return (
    <section className="categories-container">
      <ul>
        {data.map((category) => (
          <li key={category.id}>
            <button
              className="category"
              onClick={() => setSearchParams({ category : category.name })}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
