// molecules/ServiceItem.jsx
import React from "react";
import "./ServiceItem.style.scss";

const ServiceItem = ({ image, title, description }) => {
  return (
    <div className="service-item">
      <img src={image} alt={title} className="service-image" />
      <p>{title}</p>
      <h3>{description}</h3>
    </div>
  );
};

export default ServiceItem;
