import React from "react";
import "./RoundLoader.style.scss";
const RoundLoader = ({ color }) => {
  return (
    <div className="dot-spinner">
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
      <div className={`dot-spinner__dot ${color}`}></div>
    </div>
  );
};

export default RoundLoader;
