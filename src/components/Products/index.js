import React from 'react'

import ProductItem from '../ProductItem'

import "./Products.scss";

const Products = ({source, categories}) => {
    const products = source.map(({ id, data }) => ({ id, banner: { ...data } }));

    return (
        <div className="container">
            {
                products.map(({ banner }) => (
                    <ProductItem source={banner} categories={categories} />
                ))
            }
        </div>
    );
}

export default Products