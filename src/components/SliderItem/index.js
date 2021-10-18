import React from 'react'

import "./SliderItem.scss";

const SliderItem = ({source}) => {
    const { main_image: img, title } = source;
    return (
        <div>
            <img src={img.url} alt={img.alt} />
            <h2>{title}</h2>
        </div>
    );
}

export default SliderItem