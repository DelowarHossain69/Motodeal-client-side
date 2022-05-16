import React from 'react';

const BorwseCart = ({info}) => {
    const {name, quantity, img} = info;
    return (
        <div className='col-6 col-md-2 text-center py-4 rounded' style={{ cursor: 'pointer' }}>
            <img src={img} />
            <h5 className='mt-2'>{name}</h5>
            <h5 className='mt-2'>{quantity}</h5>
        </div>
    );
};

export default BorwseCart;