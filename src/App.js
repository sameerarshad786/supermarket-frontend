import "./App.css";
import { useEffect, useState } from "react"
import Main from "./Components/Main/Main";
import Login from "./Components/Auth/Login";
import Cart from "./Components/Cart/Cart";
import SearchBar from "./Components/Main/SearchBar";
import Products from "./Components/Product/Products";
import Categories from "./Components/Categories/Categories";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(localStorage.getItem("accessToken"))
    }
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main accessToken={accessToken} />
                <SearchBar accessToken={accessToken} />
                <Categories />
                <Products />
              </>
            }
          />
          <Route 
            path="/cart" 
            element={
              <>
                <Main accessToken={accessToken} />
                <Cart accessToken={accessToken} />
              </>
            }
          />
          {
          accessToken ? (
            <Route path="*" element={<Navigate to="/" />} />
            ): (
            <Route path="/login" element={<Login />} />
          )
        }
        </Routes>
      </Router>
    </>
  );
}

export default App;
