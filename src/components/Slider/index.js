import React from 'react'
import Flickity from "react-flickity-component";

import SliderItem from '../SliderItem'

import "./Slider.scss";
import "./flickity.css";

const Slider = ({source}) => {
    const banners = source.map(({ id, data }) => ({ id, banner: { ...data } }));

    const flickityOptions = {
        pageDots: false,
      }

    return (
        <div>
            <Flickity options={flickityOptions}>
            {
                banners.map(({ banner }) => (
                    <SliderItem source={banner} />
                ))
            }
            </Flickity>
        </div>
    );
}

export default Slider