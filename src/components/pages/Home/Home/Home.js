import React from 'react';
import Brands from '../Brands/Brands';
import Browse from '../Browse/Browse';
import Display from '../Display/Display';
import ProductCollection from '../ProductCollection/ProductCollection';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Brands/>
            <ProductCollection/>
            <Display/>
            <Browse/>
        </div>
    );
};

export default Home;