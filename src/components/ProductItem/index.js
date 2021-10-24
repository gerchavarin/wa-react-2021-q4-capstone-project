import React from 'react'

import "./ProductItem.scss";

const ProductItem = ({source, categories}) => {
    const { category, name, mainimage, price } = source
    const categoryFinded = categories.find(c => c.slugs.find(s => s === category.slug))

    return (
        <div>
            <div className="imgContainer">
                <img src={mainimage.url} title={mainimage.alt} alt={mainimage.alt} />
            </div>
            <h6>{categoryFinded.data.name}</h6>
            <h4>{name}</h4>
            <h2>${price}</h2>
        </div>
    );
}

export default ProductItem