import React from "react";
import SearchBar from "./SearchBar"

const Header = ({ accessToken, showSearchBar, setSearch }) => {

  return (
    <nav>
      <ul className="navbar">
        <li>
          <a className="nav-link" href="/">
            <img
              className="main-icon"
              src={require("../../Assets/favicon.ico")}
              alt="web page icon"
            />
          </a>
        </li>
        {showSearchBar ?
          <li className="search-bar-main">
            <SearchBar setSearch={setSearch} />
          </li> :
          ""
        }
        <li>
          <a className="nav-link" href={accessToken ? "/cart/" : "/login/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 -960 960 960"
              width="40"
            >
              <path d="M292.308-115.384q-25.308 0-42.654-17.347-17.347-17.346-17.347-42.654 0-25.307 17.347-42.653 17.346-17.347 42.654-17.347 25.307 0 42.654 17.347 17.346 17.346 17.346 42.653 0 25.308-17.346 42.654-17.347 17.347-42.654 17.347Zm375.384 0q-25.307 0-42.654-17.347-17.346-17.346-17.346-42.654 0-25.307 17.346-42.653 17.347-17.347 42.654-17.347 25.308 0 42.654 17.347 17.347 17.346 17.347 42.653 0 25.308-17.347 42.654-17.346 17.347-42.654 17.347ZM235.231-740 342-515.385h265.385q6.923 0 12.307-3.461 5.385-3.462 9.231-9.615l104.615-190.001q4.616-8.461.77-14.999Q730.462-740 721.231-740h-486Zm-19.539-40h520.77q26.077 0 39.231 21.269 13.153 21.269 1.384 43.808L662.769-506.615q-8.692 14.615-22.577 22.923-13.884 8.308-30.5 8.308H324l-48.615 89.23q-6.154 9.231-.385 20t17.308 10.769h435.385v40.001H292.308q-35 0-52.231-29.5-17.231-29.501-.846-59.27l60.153-107.231L152.307-820H80v-40h97.692l38 80ZM342-515.385h280-280Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
