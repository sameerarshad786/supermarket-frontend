import "./App.css";
import { useEffect, useState } from "react"
import Main from "./Components/Main/Main";
import Login from "./Components/Auth/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./Components/Cart/Cart";

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
          <Route path="/" element={<Main accessToken={accessToken} />} />
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
