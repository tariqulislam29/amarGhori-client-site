import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Menu from '../../SharedComponents/Menu/Menu';
import Banner from '../Banner/Banner';
import HomeReviews from '../HomeReviews/HomeReviews';
import Locator from '../Locator/Locator';
import Products from '../Products/Products';

import ShopByBrand from '../ShopByBrand/ShopByBrand';

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Products></Products>
            <ShopByBrand></ShopByBrand>
            <Locator></Locator>
            <HomeReviews></HomeReviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;