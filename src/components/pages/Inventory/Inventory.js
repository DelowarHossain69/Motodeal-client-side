import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import "./Inventory.css";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Inventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [productQuantity, setQuantity] = useState(0);
    const { name, img, supplier, description, price } = product;

    useEffect(() => {
        axios.get(`http://localhost:5000/car/${id}`)
            .then(data => {
                setProduct(data.data);
                setQuantity(data.data.quantity);
            });
    }, []);

    const handleFormSubmit =  e => {
        e.preventDefault();
        const quantity = e.target.quantity.value;

        axios.put(`http://localhost:5000/car/${id}`,{quantity})
        .then(data => {
            if(data.status === 200){
                e.target.reset();
                toast("Quantity updated.");
                setQuantity(quantity);
            }
        })
    }

    const handleDeleverd = () =>{
        let quantity = productQuantity - 1 || 0;
        if(quantity < 0){
            quantity = 0;
        }

        axios.put(`http://localhost:5000/car/${id}`,{quantity})
        .then(data => {
            if(data.status === 200){
                toast("Product deleverd.");
                setQuantity(quantity);
            }
        })
    }

    return (
        <section className='container mx-auto py-5 row'>
            <div className='col-12 col-md-8'>
                <div>
                    <img src={img} />
                </div>
                <h3 className='mt-3'>Name :{name}</h3>
                <h5>Price : {price}</h5>
                <h5>supplier : {supplier}</h5>
                <h5>quentity : {productQuantity}</h5>
                <p>{description}</p>
            </div>
            <div className='col-12 col-md-4'>

                <form className='update-quantity' onSubmit={handleFormSubmit}>
                    <input type="number" name='quantity' placeholder="Update Quantity" min='0' required />
                    <button type='submit' className='bg-primary text-white p-1 px-2 rounded ms-2'>Update quantity</button>
                </form>

                <div className='mt-5'>
                    <Button className='btn btn-danger' onClick={handleDeleverd}>Delevered</Button>
                    <Button className='ms-2' onClick={()=> navigate(`/manageInventory`)}>Manage inventorys</Button>
                </div>
            </div>
        </section>
    );
};

export default Inventory;