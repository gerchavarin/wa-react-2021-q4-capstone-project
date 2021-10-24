import React from 'react'

import featuredBanners from '../../mocks/en-us/featured-banners.json'
import featuredProducts from '../../mocks/en-us/featured-products.json'
import productCategories from '../../mocks/en-us/product-categories.json'

import Categories from '../../components/Categories'
import Products from '../../components/Products'
import Slider from '../../components/Slider'

const Home = () => {
    return (
        <>
            <Slider source={featuredBanners.results} />
            <Categories source={productCategories.results} />
            <Products source={featuredProducts.results} categories={productCategories.results} />
        </>
    );
}

export default Home