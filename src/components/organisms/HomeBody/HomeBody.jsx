// organisms/HomeBody.jsx
import React, { useState } from "react";
import Button from "../../atoms/Buttons/Button";
import HomeBodyHeader from "../../molecules/HomeBodyHeader/HomeBodyHeader";
import ServiceItem from "../../molecules/ServiceItem/ServiceItem";
import "./homeBody.style.scss";

const HomeBody = () => {
  // State and other functions

  Window.reload();

  return (
    <div className="App">
      <HomeBodyHeader />

      <div className="content"></div>
    </div>
  );
};

export default HomeBody;
