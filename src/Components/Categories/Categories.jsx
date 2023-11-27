import React, { useState, useEffect } from "react";
import FetchCategories from "../../Utils/FetchCategories";

const Categories = () => {
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
            <a className="category" href="/">
              <p>{category.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
