import React, { useState, useEffect } from "react";
import FetchCategories from "../../Utils/Categories/FetchCategories";

const Categories = ({ setSearchParams }) => {
  const [data, setData] = useState([{
      "id": 1,
      "name": "All",
      "sub_category": null
  }]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleOnClick(category) {
    if (category === 'All') {
      setSearchParams({ category: '' })
    } else {
      setSearchParams({ category : category })
    }
    setSelectedCategory(category);
  }

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
              onClick={(e) => handleOnClick(e.target.innerText)}
              style={{
                borderRadius: "0.5em",
                boxShadow:
                  selectedCategory === category.name
                    ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    : "none"
              }}
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
