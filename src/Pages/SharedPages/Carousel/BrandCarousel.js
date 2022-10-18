import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BrandCarousel = () => {
  const couroselStyles = {
    height: "150px",
    width: "100%",
  };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={couroselStyles}
          className="d-block w-100"
          src="https://wpforms.com/wp-content/uploads/2018/11/ways-to-sell-ad-space-on-your-wordpress-website.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={couroselStyles}
          className="d-block w-100"
          src="https://www.wordstream.com/wp-content/uploads/2021/11/online-advertising-google-adwords-illustration-1.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
