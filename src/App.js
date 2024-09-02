// import "./App.css";
// import React, { createContext, useState } from "react";

// import Home from "./Components/Home/Home";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Aboutus from "./Components/Aboutus/Aboutus";
// // import Product from "./Components/Products/Product";
// import Product from "./Components/ProductList/Product";
// import Main from "./Components/Main";
// import Cart from "./Components/Cart/Cart";
// import Contact from "./Components/Contact/Contact";
// import Scrooltop from "./Components/Scrooltop";

// export const CartContext = createContext();
// function App() {
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState([]);
//   // //cart increment button
//   const incrementCartCount = () => {
//     setCartCount((prevCount) => prevCount + 1);
//   };

//   //added cart produts
//   const addToCart = (product, selectedOption, quantity) => {
//     setCartItems((prevItems) => {
//       // Check if the product with the same option already exists in the cart
//       const existingItemIndex = prevItems.findIndex(
//         (item) =>
//           item.product.name === product.name &&
//           item.selectedOption === selectedOption
//       );

//       if (existingItemIndex !== -1) {
//         // If the product exists, update the quantity
//         const updatedItems = [...prevItems];
//         updatedItems[existingItemIndex].quantity += quantity;
//         return updatedItems;
//       } else {
//         // If the product doesn't exist, add it to the cart
//         setCartCount((prevCount) => prevCount + 1); // Increment cart count for unique product
//         return [...prevItems, { product, selectedOption, quantity }];
//       }
//     });
//   };

//   //cart increment and decrement option
//   const incrementQuantity = (index) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item, i) =>
//         i === index ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decrementQuantity = (index) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item, i) =>
//         i === index && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };
//   // delete product

//   const deleteFromCart = (index) => {
//     setCartItems((prevItems) => {
//       const updatedItems = prevItems.filter((_, i) => i !== index);
//       setCartCount((prevCount) => prevCount - 1); // Decrement cart count for removed product
//       return updatedItems;
//     });
//   };

//   // amount calculation
//   const calculateTotalAmount = () => {
//     return cartItems.reduce(
//       (total, item) =>
//         total + item.product.price[item.selectedOption] * item.quantity,
//       0
//     );
//   };
//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         cartCount,
//         incrementCartCount,
//         incrementQuantity,
//         decrementQuantity,
//         deleteFromCart,
//         calculateTotalAmount,
//       }}
//     >
//       <BrowserRouter>
//         <Scrooltop />
//         <Routes>
//           <Route path="/" element={<Main />}>
//             <Route index element={<Home />} />
//             <Route path="product" element={<Product />} />
//             <Route path="Aboutus" element={<Aboutus />} />
//             <Route path="Footer" element={<Footer />} />
//             <Route path="cart" element={<Cart />} />
//             <Route path="/contact" element={<Contact />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </CartContext.Provider>
//   );
// }

// export default App;

import "./App.css";
import React, { createContext, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Scrooltop from "./Components/Scrooltop";

// Lazy loading components
const Home = lazy(() => import("./Components/Home/Home"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Aboutus = lazy(() => import("./Components/Aboutus/Aboutus"));
const Product = lazy(() => import("./Components/ProductList/Product"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

// Context for Cart
export const CartContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Cart functions (same as your code)
  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const addToCart = (product, selectedOption, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.product.name === product.name &&
          item.selectedOption === selectedOption
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        setCartCount((prevCount) => prevCount + 1);
        return [...prevItems, { product, selectedOption, quantity }];
      }
    });
  };

  const incrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (index) => {
    setCartItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((_, i) => i !== index);
      setCartCount((prevCount) => prevCount - 1);
      return updatedItems;
    });
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.product.price[item.selectedOption] * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        cartCount,
        incrementCartCount,
        incrementQuantity,
        decrementQuantity,
        deleteFromCart,
        calculateTotalAmount,
      }}
    >
      <BrowserRouter>
        <Scrooltop />
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="Aboutus" element={<Aboutus />} />
              <Route path="Footer" element={<Footer />} />
              <Route path="cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
