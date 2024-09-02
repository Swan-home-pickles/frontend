import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLeaf, FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { CartContext } from "../../App";
const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const [isOpen, setIsopen] = useState(false);
  const location = useLocation();

  const toggleopen = () => {
    setIsopen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsopen(false); // Close the menu when a link is clicked
  };
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/" className="logo-name">
            <span id="logo-text">
              SWAN
              <span>
                <FaLeaf />
              </span>
            </span>
            <span className="logo-name2">HOME PICKELS</span>
          </Link>
        </div>
        <div className={`nav-linkes ${isOpen ? "open" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={handleLinkClick}>
              {" "}
              Home
            </Link>
          </li>
          <li className={location.pathname === "/product" ? "active" : ""}>
            <Link to="product" onClick={handleLinkClick}>
              {" "}
              Products
            </Link>
          </li>
          <li className={location.pathname === "/Aboutus" ? "active" : ""}>
            <Link to="Aboutus" onClick={handleLinkClick}>
              About
            </Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="contact" onClick={handleLinkClick}>
              Contact us
            </Link>
          </li>
        </div>
        <div className="cart ">
          <Link to="cart" onClick={handleLinkClick}>
            <FaCartPlus id="cart-icon" />
            <span id="cart-count">{cartCount}</span>
          </Link>
        </div>

        <div className="hambergur-menu" onClick={toggleopen}>
          {isOpen ? <RxCross1 /> : <GiHamburgerMenu />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
