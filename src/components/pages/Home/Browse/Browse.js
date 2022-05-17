import React, { useEffect, useState } from 'react';
import BorwseCart from './BorwseCart';

const Browse = () => {
    const [browse, setBrowse] = useState([]);
    console.log(browse)
    useEffect(()=>{
        fetch('browse.json')
        .then(res => res.json())
        .then(data => setBrowse(data));
    }, []);

    return (
        <section className='container mx-auto py-5'>
            <h1 className='text-center mb-5'>Browse by Type</h1>
            <div className='row'>
                {
                    browse.map(info => <BorwseCart
                        key={info._id}
                        info={info}
                    ></BorwseCart>)
                }
            </div>
        </section>
    );
};

export default Browse;