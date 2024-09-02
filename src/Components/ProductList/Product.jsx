import React from "react";
import "./Product.css";
import chickenDetails from "./Chickenjson"; // Assuming this is the correct path
import muttonDetails from "./Mutttonjson"; // Assuming this is the correct path
import fishDetails from "./Fishjson";
import ProductList from "./Productlist";
import { HashLink } from "react-router-hash-link";

const Product = () => {
  return (
    <>
      <div className="product">
        <div>
          <div className="products-header">
            <h5>PICKLES MENU</h5>
          </div>

          <div className="products-header Link-colors">
            <HashLink to="#chicken">CHICKEN PICKLES</HashLink>
            <HashLink to="#mutton">MUTTON PICKLES</HashLink>
            <HashLink to="#fish">FISH PICKLES</HashLink>
          </div>
        </div>

        <div id="chicken">
          <div className="products-header">
            <h5>CHICKEN PICKLES</h5>
          </div>
          <ProductList products={chickenDetails} />
        </div>

        <div id="mutton">
          <div className="products-header">
            <h5>MUTTON PICKLES</h5>
          </div>
          <ProductList products={muttonDetails} />
        </div>

        <div id="fish">
          <div className="products-header">
            <h5>FISH PICKLES</h5>
          </div>
          <ProductList products={fishDetails} />
        </div>
      </div>
    </>
  );
};

export default Product;
