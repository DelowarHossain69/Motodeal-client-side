import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHandHoldingDollar, faShuffle, faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

const Display = () => {
    return (
        <section className='container mx-auot py-5'>
            <div className='row'>
                <div className='col-12 col-md-6 text-center'>
                    <img src='https://i.ibb.co/QYbp41R/display.png' className='w-75' />
                </div>
                <div className='col-12 col-md-6'>
                    <h1>World largest automotive marketplace.</h1>

                    <div className='row mt-5 g-3'>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <FontAwesomeIcon className='fs-1' icon={faCar} />
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h4>Best Collection</h4>
                                    <p>A car is a wheeled motor vehicle used for transportation.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <FontAwesomeIcon className='fs-1' icon={faHandHoldingDollar} />
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h4>Best Pricing</h4>
                                    <p>A pricing strategy is a model or method used to establish the best price for a product or service.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <FontAwesomeIcon className='fs-1' icon={faShuffle} />
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h4>Famous Brands</h4>
                                    <p>A brand is a name, term, design, symbol or any other feature</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 d-flex align-items-center'>
                            <div className='row'>
                                <div className='col-12 col-md-3'>
                                    <FontAwesomeIcon className='fs-1' icon={faCompassDrafting} />
                                </div>
                                <div className='col-12 col-md-9'>
                                    <h4>Best Ratings</h4>
                                    <p>A classification or ranking of someone or something based on a comparative assessment of their quality</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Display;