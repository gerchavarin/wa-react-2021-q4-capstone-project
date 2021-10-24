import React from 'react'

import CategoryItem from '../CategoryItem'

import "./Categories.scss";

const Categories = ({source}) => {
    const categories = source.map(({ id, data }) => ({ id, category: { ...data } }));

    return (
        <div className="container">
            {
                categories.map(({ category }) => (
                    <CategoryItem source={category} />
                ))
            }
        </div>
    );
}

export default Categories