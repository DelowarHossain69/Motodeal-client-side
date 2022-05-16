import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [notification, setNotification] = useState(false);
    const [product, setProduct] = useState({});
    const { name, img, supplier, description, price, quentity } = product;

    useEffect(() => {
        axios.get(`http://localhost:5000/car/${id}`)
            .then(data => setProduct(data.data));
    }, [notification]);

    const onSubmit =  data => {
        axios.put(`http://localhost:5000/car/${id}`, data)
        .then(res => {
            console.log('updated', res);
            if(res.status === 200){
                reset();
                toast.success('Product Updated.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setNotification(!notification);
            }
        });
    }

    return (
        <section className='container mx-auto py-5 row'>
            <div className='col-12 col-md-6'>
                <div>
                    <img src={img} />
                </div>
                <h3>Name :{name}</h3>
                <h5>Price : {price}</h5>
                <h5>supplier : {supplier}</h5>
                <h5>quentity : {price}</h5>
                <p>{description}</p>
            </div>
            <div className='col-12 col-md-6'>

                <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">

                    <input className='w-100 mb-3 p-2' {...register("name")} placeholder="Update Name" type='text' required />

                    <input className='w-100 mb-3 p-2' {...register("price")} placeholder="Update Price" type="number" required />

                    <input className='w-100 mb-3 p-2' {...register("quantity")} placeholder="Update Quantity" type="number" required />

                    <input className='w-100 mb-3 p-2' {...register("supplier")} placeholder="Update Supplier" required />

                    <input className='w-100 mb-3 p-2' {...register("img")} placeholder="Update Photo URL" required />

                    <textarea {...register("description")} placeholder="Update Description" required rows={3} style={{ maxWidth: '100%', minWidth: '100%' }} />

                    <input className='w-100 mb-3 p-2' type="submit" />
                </form>

            </div>
        </section>
    );
};

export default UpdateProduct;