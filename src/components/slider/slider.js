import React, { useState } from "react";
import "./slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    setSlideIndex(slideIndex === dataSlider.length ? 1 : slideIndex + 1);
  };
  const prevSlide = () => {
    setSlideIndex(slideIndex !== 1 ? slideIndex - 1 : dataSlider.length);
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              alt="img"
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {dataSlider.map((item, index) => (
          <div
            key={item.id}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
