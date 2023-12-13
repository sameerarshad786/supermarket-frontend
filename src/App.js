import "./App.css";
import { useState } from "react"
import Main from "./Components/Main/Main";
import Login from "./Components/Auth/Login";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Product/Products";
import Categories from "./Components/Categories/Categories";
import {
  Routes,
  Route,
  Navigate,
  useSearchParams
} from "react-router-dom";

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [searchParams, setSearchParams] = useSearchParams();

  const handleLoginSuccess = (token) => {
    setAccessToken(token);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main
              accessToken={accessToken}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              showSearchBar={true}
            />
            <Categories />
            <Products accessToken={accessToken} searchParams={searchParams} />
          </>
        }
      />
      <Route 
        path="/cart" 
        element={
          <>
            <Main accessToken={accessToken} showSearchBar={false} />
            <Cart accessToken={accessToken} />
          </>
        }
      />
      {
        accessToken ? (
          <Route path="*" element={<Navigate to="/" />} />
          ): (
          <Route path="/login/" element={<Login handleLoginSuccess={handleLoginSuccess} />} />
        )
      }
    </Routes>
  );
}

export default App;
