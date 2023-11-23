import React, { useEffect, useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLogin(true)
    }
  }, [])

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
        <li>
          <a className="nav-link" href={isLogin ? "/" : "/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M233.964-253.577q59.806-40.807 118.344-63.23Q410.846-339.23 480-339.23t127.75 22.423q58.596 22.423 119.519 63.23 43.73-50.653 64.769-106.59 21.039-55.937 21.039-119.665 0-140.899-96.173-237.072T480-813.077q-140.731 0-236.904 96.173t-96.173 237.072q0 63.728 21.347 119.665 21.346 55.937 65.694 106.59Zm245.874-204.347q-53.876 0-90.434-36.719-36.557-36.719-36.557-90.595 0-53.877 36.719-90.434 36.719-36.558 90.596-36.558 53.876 0 90.434 36.719 36.557 36.719 36.557 90.596 0 53.876-36.719 90.434-36.719 36.557-90.596 36.557Zm.38 354.846q-77.855 0-146.73-29.725-68.875-29.724-119.931-80.961-51.056-51.237-80.767-119.681-29.712-68.444-29.712-146.725 0-77.775 29.725-146.414 29.724-68.639 80.961-119.777 51.237-51.138 119.681-80.849 68.444-29.712 146.725-29.712 77.775 0 146.414 29.725 68.639 29.724 119.777 80.961 51.138 51.237 80.849 119.82 29.712 68.583 29.712 146.198 0 77.855-29.725 146.73-29.724 68.875-80.961 119.931-51.237 51.056-119.82 80.767-68.583 29.712-146.198 29.712Zm-.26-43.845q55.504 0 109.177-17.577 53.673-17.578 102.404-57.193-48.731-35.231-101.718-54.461-52.988-19.231-109.749-19.231-56.762 0-110.36 18.692-53.597 18.692-100.866 55 48.346 39.615 101.978 57.193 53.631 17.577 109.134 17.577Zm.096-354.846q36.369 0 59.812-23.496 23.442-23.496 23.442-59.865 0-36.37-23.496-59.812-23.496-23.443-59.866-23.443-36.369 0-59.812 23.496-23.442 23.496-23.442 59.866 0 36.369 23.496 59.812 23.496 23.442 59.866 23.442ZM480-585.077Zm0 363.923Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;