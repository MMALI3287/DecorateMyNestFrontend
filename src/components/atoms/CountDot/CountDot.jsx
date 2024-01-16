import React from "react";
import "./CountDot.style.scss";

const RedDot = ({ count }) => {
  return (
    <>
      {count > 0 && (
        <div className="red-dot">
          <p>{count > 99 ? "99+" : count}</p>
        </div>
      )}
    </>
  );
};

export default RedDot;
