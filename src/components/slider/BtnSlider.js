import React from "react";
import "./slider.css";

const BtnSlider = ({ moveSlide, direction }) => {
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    ></button>
  );
};
export default BtnSlider;
