import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CollectionCart from '../CollectionCart/CollectionCart';

const ProductCollection = () => {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState([]);

    // get all cars
    useEffect(()=>{
        axios.get('https://thawing-waters-01776.herokuapp.com/cars')
        .then(data => setAllCars(data.data));
    }, []);

    // get three latest cars for home page
    useEffect(()=>{
        axios.get('https://thawing-waters-01776.herokuapp.com/threeCars')
        .then(data => setCars(data.data));
    }, []);

    return (
        <section className='py-5 container mx-auto'>
            <h1 className='text-center mb-5'>Inventory</h1>
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        cars?.map(car => <CollectionCart
                            key={car._id}
                            carInfo={car}
                        ></CollectionCart>)
                    }
                </Row>

                <div className='text-center mt-5'>
                    {
                        allCars?.length > 3 && 
                        <Button onClick={()=> navigate(`products`)}>View all</Button>
                    }
                </div>
            </div>
        </section>
    );
};

export default ProductCollection;