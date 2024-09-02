import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import "./Cart.css";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";

const Cart = () => {
  const {
    cartItems,
    incrementQuantity,
    decrementQuantity,
    deleteFromCart,
    calculateTotalAmount,
  } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState("");

  const [errors, setErrors] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlephoneChange = (e) => {
    setPhonenum(e.target.value);
  };

  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const validateInputs = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phonenum) newErrors.phonenum = "Phone number is required";
    if (!address) newErrors.address = "Delivery address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleContinue = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    if (!validateInputs()) {
      return;
    }
    // Check if the cart is empty
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty. Please add items to the cart before proceeding."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phonenum, address, cartItems }),
      });

      if (!response.ok) {
        throw new Error("Failed to send order details");
      }

      const data = await response.json();
      window.location.href = data.whatsappLink; // Redirect to WhatsApp
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  const handleDecrement = (index) => {
    if (cartItems[index].quantity > 1) {
      decrementQuantity(index);
    } else {
      deleteFromCart(index);
    }
  };
  return (
    <div className="cart">
      {cartItems.length !== 0 && (
        <div className="cart-head-name">
          <h2>Your Cart Items</h2>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="cart-head-name">
          <h2>Your cart is empty.</h2>
        </div>
      ) : (
        <>
          <div className="cart-item-total">
            <div className="cart-item-heading">
              <div className="cart-head-names">
                <p className="cart-item-p">Cart Iteam</p>
                <p>product Name</p>
                <p>Price</p>
                <p>Grams</p>
                <p>Qty</p>
                <p>Subtotal</p>
              </div>
            </div>
            {cartItems.map((item, index) => (
              <div key={item.product.id || index} className="cart-item-main">
                <img src={item.product.images} alt={item.product.name} />
                <div key={index} className="cart-item">
                  <h3>{item.product.name}</h3>
                  <p>
                    ₹<span>{item.product.price[item.selectedOption]}</span>
                  </p>
                  <p>
                    <span id="cart-grams">{item.selectedOption} </span>
                  </p>
                  <div className="quantity-controls-cart">
                    <RiSubtractFill
                      id="cart-inmt-dcrmt"
                      onClick={() => handleDecrement(index)}
                    />

                    <input type="text" value={item.quantity} readOnly />
                    <IoAddOutline
                      id="cart-inmt-dcrmt"
                      onClick={() => incrementQuantity(index)}
                    />
                  </div>
                  <p className="total-price">
                    <span>
                      ₹{item.product.price[item.selectedOption] * item.quantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {cartItems.length !== 0 && (
        <div className="cart-total">
          <h2>Total Amount: ₹{calculateTotalAmount()}</h2>
        </div>
      )}

      <div className="cart-sec-form">
        <div className="cart-form">
          <form onSubmit={handleContinue}>
            <div>
              Full name:
              <input type="text" value={name} onChange={handlenameChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div>
              Phone Number:
              <input
                type="text"
                value={phonenum}
                onChange={handlephoneChange}
              />
              {errors.phonenum && (
                <span className="error">{errors.phonenum}</span>
              )}
            </div>
            <div>
              Delivery Address:
              <input
                type="text"
                value={address}
                onChange={handleAddressChange}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
            <div className="cart-sub-btn">
              <button type="submit">Continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
