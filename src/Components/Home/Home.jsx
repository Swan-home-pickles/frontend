import React, { useState, useEffect } from "react";
import mainimage from "../../assets/picklestyleimg.webp";
import "./Home.css";
import berry from "../../assets/berry.png";
import leaf from "../../assets/leaf.png";
import mango from "../../assets/Mango-Pickle.jpg";
import leamon from "../../assets/Lemon-Pickle.jpg";
import goungra from "../../assets/Gongura.jpg";
import chickenDetails from "../ProductList/Chickenjson";
import muttonDetails from "../ProductList/Mutttonjson";
import fishDetails from "../ProductList/Fishjson";
import ProductList from "../ProductList/Productlist";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [mango, leamon, goungra];

  const allProducts = [
    ...(chickenDetails || []),
    ...(muttonDetails || []),
    ...(fishDetails || []),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : selectedCategory === "Chicken"
      ? chickenDetails
      : selectedCategory === "Mutton"
      ? muttonDetails
      : fishDetails;

  //  carousel
  // Carousel: Automatically slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="main-banner">
        <div className="js-parallax-scene">
          <div className="banner-shape-1">
            <img src={berry} alt="berry" />
          </div>
          <div className="banner-shape-2">
            <img src={leaf} alt="leaf" />
          </div>
        </div>
        <div className="sec-wp">
          <div className="banner-text">
            <h1 className="h1-title">
              Welcome to our
              <br />
              <span>Swan Home </span>
              Pickles.
            </h1>
            <p className="cotation">
              Elevate your meals with our signature non veg pickles
            </p>
            <p>
              Savor the taste of tradition with our handpicked selection of
              pickles, crafted with the freshest ingredients and time-honored
              recipes. Whether you crave the tangy zest of lime, the fiery kick
              of chili, or the rich savoriness of mutton, our pickles bring a
              burst of flavor to every meal. Explore our collection and find
              your favorite today!
            </p>
          </div>
          <div className="banner-imgs">
            <div className="banner-img-wp">
              <div className="banner-img">
                <img src={mainimage} alt="mainimage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ment-items-produ">
        <div className="menu-tab">
          <div className="menu-bts">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            <button
              className={selectedCategory === "Chicken" ? "active" : ""}
              onClick={() => setSelectedCategory("Chicken")}
            >
              Chicken
            </button>
            <button
              className={selectedCategory === "Mutton" ? "active" : ""}
              onClick={() => setSelectedCategory("Mutton")}
            >
              Mutton
            </button>
            <button
              className={selectedCategory === "Fish" ? "active" : ""}
              onClick={() => setSelectedCategory("Fish")}
            >
              Fish
            </button>
          </div>
        </div>

        <div className="product-list-container">
          <ProductList products={filteredProducts} />
        </div>
      </div>
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex}`}
          className="carousel-image"
        />
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
