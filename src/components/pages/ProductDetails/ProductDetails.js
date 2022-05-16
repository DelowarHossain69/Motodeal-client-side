import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:5000/car/${id}`)
        .then(data => setProduct(data.data));
    }, []);

    return (
        <div className='container mx-auto text-center'>
            <img src={product.img}/>
            <h2>Name :{product.name}</h2>
            <h5>Quantity : {product.quantity}</h5>
            <h5>Supplier : {product.supplier}</h5>
            <p>Description : {product.description}</p>
        </div>
    );
};

export default ProductDetails;