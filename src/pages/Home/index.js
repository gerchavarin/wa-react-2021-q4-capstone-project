import React from 'react'

import featuredBanners from '../../mocks/en-us/featured-banners.json'

import Slider from '../../components/Slider'

const Home = () => {
    return (
        <Slider source={featuredBanners.results} />
    );
}

export default Home