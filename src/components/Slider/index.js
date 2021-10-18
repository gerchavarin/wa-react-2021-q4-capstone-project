import React from 'react'
import Flickity from "react-flickity-component";

import SliderItem from '../SliderItem'

import "./Slider.scss";
import "./flickity.css";

const Slider = ({source}) => {
    const banners = source.map(({ id, data }) => ({ id, banner: { ...data } }));

    return (
        <div>
            <Flickity>
                <SliderItem source={banners[0].banner} />
                <SliderItem source={banners[1].banner} />
                <SliderItem source={banners[2].banner} />
            </Flickity>
        </div>
    );
}

export default Slider