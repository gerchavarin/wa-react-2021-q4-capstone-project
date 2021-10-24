import React from 'react'

import "./CategoryItem.scss";

const CategoryItem = ({source}) => {
    const { name, main_image } = source

    return (
        <div>
            <div className="imgContainer">
                <img src={main_image.url} title={main_image.alt} alt={main_image.alt} />
            </div>
            <h4>{name}</h4>
        </div>
    );
}

export default CategoryItem