import React from "react";
import './slider.css'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'
const BtnSlider = ({moveSlide,direction }) =>{
    return (
        <button className={direction==='next'? 'btn-slide next':'btn-slide prev'}
                onClick={moveSlide}>
            {/*<img src={direction === 'next' ? rightArrow : leftArrow}/>*/}
        </button>
    )
}
export default BtnSlider