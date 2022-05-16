import React from 'react';

const Brands = () => {
    return (
        <section className='container mx-auto py-5'>
            <h1 className='text-center mb-5'>Popular Brands</h1>
            <div className='row g-4'>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src='https://i.ibb.co/GH5JbMt/car-company-3.png'/>
                        <h4>Marcedes</h4>
                    </div>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src="https://i.ibb.co/D5hQySS/car-company-5.png"/>
                        <h4>Porsche</h4>
                    </div>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src="https://i.ibb.co/fqSxP5c/car-company-6.png"/>
                        <h4>Nissan</h4>
                    </div>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src="https://i.ibb.co/fqSxP5c/car-company-6.png"/>
                        <h4>Toyota</h4>
                    </div>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src="https://i.ibb.co/Nmf4cJC/car-company-7.png"/>
                        <h4>FAW</h4>
                    </div>
                    <div className='col-6 col-md-2 text-center'>
                        <img className='mb-2' src="https://i.ibb.co/fqSxP5c/car-company-6.png"/>
                        <h4>Toyota</h4>
                    </div>
            </div>
        </section>
    );
};

export default Brands;