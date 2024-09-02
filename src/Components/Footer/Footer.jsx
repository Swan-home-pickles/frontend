import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./Footer.css";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer">
          <div className="logo">
            <Link className="logo-name">
              <span id="logo-text">
                SWAN
                <span>
                  <FaLeaf />
                </span>
              </span>
              <span className="logo-name2">HOME PICKELS</span>
            </Link>
          </div>
          <div className="linkes">
            <h4>Links</h4>
            <div className="linkes-name">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="product"> Products</Link>
              </li>
              <li>
                <Link to="Aboutus">About</Link>
              </li>
              <li>
                <Link>Contact us</Link>
              </li>
            </div>
          </div>
          <div className="email">
            <p className="email-name">
              Email:<span>swanhomepickels@gmail.com</span>
            </p>
            <p className="email-name">
              ph:<span>+91 –9705050055</span>
            </p>
          </div>
          <div className="foter-head">
            <div className="foot-head-name">
              <h4>Branches</h4>
            </div>
            <div className="foter-add">
              <div className="">
                <FaLocationDot id="" />
                <address>
                  <h6>Vijayawada </h6>
                  Lotus land mark,
                  <br />2 town Kaleswara market,
                  <br /> AP 520003
                </address>
              </div>
              <div className="">
                <FaLocationDot id="" />
                <address>
                  <h6>Hyderabad </h6>Madhura Nagar <br />
                  Phase 1 Hyderabad, <br />
                  TS 500038
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <p>
            Copyright &copy; 2024{" "}
            <span className="name">Swan HomePickles.</span>All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
