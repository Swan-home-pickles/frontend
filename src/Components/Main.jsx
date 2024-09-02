import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

import Navbar from "./Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
