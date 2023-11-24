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

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true)
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {
          isLogin ? (
            <Route path="*" element={<Navigate to="/" />} />
            ): (
            <Route path="/login" element={<Login />} />
          )
        }
      </Routes>
    </Router>
  );
}

export default App;
