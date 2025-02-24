import { useState } from "react";
import { LOGO_URL } from "./utils/contants";
import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa"; // Importing user icon

export const Header = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const cartItems = useSelector((store) => store.cart.items) || [];

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value.trim(); // Get and trim input
    if (username) {
      setLoggedInUser(username); // Set user name
      setIsLoginFormVisible(false); // Hide form
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/help">Help & Support</Link></li>
          <li><Link to="/cart">Cart ({cartItems.length})</Link></li>

          {!loggedInUser ? (
            <li className="log" onClick={() => setIsLoginFormVisible(true)}>Login</li>
          ) : (
            <li className="logged-in">
              <FaUserCircle className="user-icon" />
              {loggedInUser}
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>

      {isLoginFormVisible && (
        <div className="login-form">
          <form onSubmit={handleLoginSubmit}>
            <input type="text" name="username" placeholder="Enter your name" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};
