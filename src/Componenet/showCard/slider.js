import React from "react";
import Responsive from "./carousal";
import "./carousal.css";

const CarousalBookSummary = () => {
  return (
    <div className="summrayBook-content">
      <div className="slider-container">
        <div className="section-1 first-slider">
          <Responsive />
        </div>
      </div>
    </div>
  );
};

export default CarousalBookSummary;
