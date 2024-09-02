import React, { useState, useContext } from "react";
import "./Product.css";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { CartContext } from "../../App";

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const [selectedOptions, setSelectedOptions] = useState(
    products.reduce((acc, product, index) => {
      acc[index] = "250grms"; // Default option for each product
      return acc;
    }, {})
  );

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product, index) => {
      acc[index] = 1; // Default quantity for each product
      return acc;
    }, {})
  );

  const handleOptionClick = (index, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [index]: option,
    }));
  };

  const incrementQuantity = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const decrementQuantity = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, prev[index] - 1),
    }));
  };

  const handleAddToCart = (index) => {
    const product = products[index];
    const selectedOption = selectedOptions[index];
    const quantity = quantities[index];
    addToCart(product, selectedOption, quantity);
  };

  return (
    <div className="products-list">
      {products.map((product, index) => (
        <div key={index} className="products-item">
          <img src={product.images} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="options-click">
            <div className="options-btns">
              <button
                className={
                  selectedOptions[index] === "250grms" ? "actives" : ""
                }
                onClick={() => handleOptionClick(index, "250grms")}
              >
                250Gram
              </button>
              <button
                className={
                  selectedOptions[index] === "500grms" ? "actives" : ""
                }
                onClick={() => handleOptionClick(index, "500grms")}
              >
                500Gram
              </button>
              <button
                className={selectedOptions[index] === "kg" ? "actives" : ""}
                onClick={() => handleOptionClick(index, "kg")}
              >
                1kg
              </button>
            </div>
          </div>
          <p className="pdt-price">
            Price: ₹<span>{product.price[selectedOptions[index]]}</span>
          </p>
          <div className="quantitys-controls">
            <RiSubtractFill
              id="icon-inmt-dcrmt"
              onClick={() => decrementQuantity(index)}
            />

            <input
              type="text"
              value={quantities[index]}
              readOnly // Make it read-only
            />
            <IoAddOutline
              id="icon-inmt-dcrmt"
              onClick={() => incrementQuantity(index)}
            />
          </div>
          <div className="button-add-cart">
            <button onClick={() => handleAddToCart(index)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
