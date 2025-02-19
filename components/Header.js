import { useState } from "react";
import { LOGO_URL } from "./utils/contants";
import { Link } from "react-router"; 

export const Header = () => {
  const [Log, setLog] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          <li>
            <button
              className="log"
              onClick={() => setLog(Log === "Login" ? "Logout" : "Login")}
            >
              {Log}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
