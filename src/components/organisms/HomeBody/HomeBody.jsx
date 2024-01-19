// organisms/HomeBody.jsx
import React, { useState } from "react";
import Button from "../../atoms/Buttons/Button";
import HomeBodyHeader from "../../molecules/HomeBodyHeader/HomeBodyHeader";
import ServiceItem from "../../molecules/ServiceItem/ServiceItem";
import "./homeBody.style.scss";

const HomeBody = () => {
  // State and other functions

  return (
    <div className="App">
      {/* HomeBodyHeader Molecule */}
      <HomeBodyHeader />

      <div className="content">
        {/* Rest of the content */}
      </div>
    </div>
  );
};

export default HomeBody;
