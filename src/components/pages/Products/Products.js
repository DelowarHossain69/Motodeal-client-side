import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CollectionCart from '../Home/CollectionCart/CollectionCart';

const Products = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://thawing-waters-01776.herokuapp.com/cars')
            .then(data => setProduct(data.data));
    }, []);

    return (
        <section className='container mx-auto py-5'>
            <h2 className='mb-5'>All Product : </h2>
            <Row xs={1} md={3} className="g-4">
                {
                    products?.map(car => <CollectionCart
                        key={car._id}
                        carInfo={car}
                    ></CollectionCart>)
                }
            </Row>
        </section>
    );
};

export default Products;