import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit =  data => {
        axios.post(`http://localhost:5000/car`, data)
        .then(res => {
            if(res.status === 200){
                reset();
                toast.success('Product added.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    }

    return (
        <div className='container mx-auto my-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">

                <input className='w-100 mb-3 p-2' {...register("name")} placeholder="Name" type='text' required />

                <input className='w-100 mb-3 p-2' {...register("price")} placeholder="Price" type="number" required />

                <input className='w-100 mb-3 p-2' {...register("quantity")} placeholder="Quantity" type="number" required />

                <input className='w-100 mb-3 p-2' {...register("supplier")} placeholder="Supplier" required />

                <input className='w-100 mb-3 p-2' {...register("img")} placeholder="Photo URL" required />

                <textarea {...register("description")} placeholder="Description" required rows={3} style={{maxWidth : '100%', minWidth: '100%'}}/>

                <input className='w-100 mb-3 p-2' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;