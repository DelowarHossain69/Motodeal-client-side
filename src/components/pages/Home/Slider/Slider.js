import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Hp81LfY/budget-slider-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The best offer in 2022</h3>
                    <p>Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars a</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/kcFWts0/budget-slider-2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>The best offer in 2022</h3>
                    <p>A brand is a name, term, design, symbol or any other feature</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;