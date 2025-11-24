import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
      className="about-section"
    >
      <h1
        className="about "
        style={{ textAlign: "center", marginBottom: "20px" }}
      >
        Hoba Store
      </h1>
      <p>
        Hoba store is an online store dedicated to providing a wide range of
        high-quality products at affordable prices. Our mission is to make
        online shopping easy, fast, and enjoyable for everyone. We are committed
        to delivering excellent customer service and ensuring that every
        shopping experience is smooth and satisfying.
      </p>
      <p>
        At Hoba Store, we value quality, trust, and customer satisfaction. We
        continuously update our products and services to meet the needs of our
        customers and keep up with the latest trends in e-commerce.
      </p>
      <p>
        Thank you for choosing Hoba Store. We hope you enjoy your shopping
        experience with us!
      </p>
    </div>
  );
};

export default About;
