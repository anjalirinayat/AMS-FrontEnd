import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, MapPin } from "lucide-react";

import Logo from "../assets/Logo.png";
import "../styles/NavBar.css";
import LoginPopup from "../components/LoginPopUp";

const NavBar = () => {
  // State to control login popup visibility
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="navbar bg-black text-white py-2 md:py-4 lg:py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="navbar-logo navbar-brand items-center w-40 h-40">
        <Link to="/">
          <img src={Logo} alt="Adarsh Mutton Shop Logo" className="logo-img" />
        </Link>
      </div>

      {/* Center Section: Location + Search */}
      <div className="navbar-center flex flex-col md:flex-row items-center gap-3">
        <div className="navbar-location flex items-center gap-1">
          <MapPin size={18} className="icon" />
          <select className="text-black px-1 rounded">
            <option value="Tirora">Tirora</option>
            <option value="Gondia">Gondia</option>
            <option value="Nagpur">Nagpur</option>
          </select>
        </div>

        <div className="navbar-search flex items-center gap-2 bg-white rounded px-2">
          <input
            type="text"
            placeholder="What do you want to order today !!!.........."
            className="text-black outline-none py-1 w-64"
          />
          <Search size={18} className="icon text-black" />
        </div>
      </div>

      {/* Right side links */}
      <div className="nav-links">
        <Link to="/Cart" className="nav-link flex items-center gap-1">
          <ShoppingCart size={18} /> Cart
        </Link>
        <Link to="/AboutUs" className="nav-link">
          AboutUs
        </Link>

        {/* Login Link */}
        <a
          href="#login"
          onClick={(e) => {
            e.preventDefault(); // prevent default anchor navigation
            setShowLogin(true);
          }}
          className="login-link"
        >
          Login
        </a>
      </div>

      {/* Login Popup */}
      <LoginPopup visible={showLogin} onClose={() => setShowLogin(false)} />
    </nav>
  );
};

export default NavBar;
