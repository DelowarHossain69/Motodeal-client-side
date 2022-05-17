import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        axios.get(`https://thawing-waters-01776.herokuapp.com/car/${id}`)
        .then(data => setProduct(data.data));
    }, []);

    return (
        <div className='container mx-auto text-center py-5'>
            <img src={product.img}/>
            <h3 className='my-3'>Name :{product.name}</h3>
            <h5>Quantity : {product.quantity}</h5>
            <h5>Supplier : {product.supplier}</h5>
            <p>Description : {product.description}</p>
        </div>
    );
};

export default ProductDetails;