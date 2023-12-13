import React, { useEffect, useState } from "react";
import queryString from "query-string";

const SearchBar = ({ searchParams, setSearchParams }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const search = queryString.parse(window.location.search.toString())["search"]
    if (search) {
      setSearchParams({ search : search});
      setValue(search)
    }
  }, [searchParams])

  function handleSearchBarSubmit(event) {
    event.preventDefault();
    setSearchParams({ search : value })
  }

  return (
    <form className="search-bar-container" method="GET" onSubmit={handleSearchBarSubmit}>
      <input
        id="search"
        className="search-bar"
        type="text"
        placeholder="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="search">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M783.282-154 529.077-408.205q-29.798 26.398-69.174 40.456-39.376 14.057-79.185 14.057-95.757 0-162.084-66.196-66.327-66.195-66.327-161.525 0-95.331 66.196-161.651 66.195-66.321 161.486-66.321 95.29 0 161.907 66.232t66.617 161.529q0 41.368-14.769 80.778-14.77 39.41-40.411 68.384l254.36 253.539L783.282-154ZM380.564-387.538q81.645 0 137.874-56.09t56.229-137.911q0-81.82-56.229-137.91t-137.874-56.09q-81.773 0-138.092 56.09-56.318 56.09-56.318 137.91 0 81.821 56.318 137.911 56.319 56.09 138.092 56.09Z"/>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
