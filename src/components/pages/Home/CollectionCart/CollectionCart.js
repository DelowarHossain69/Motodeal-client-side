import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CollectionCart = ({carInfo}) => {
    const {name, img, supplier, description, price, quantity, _id} = carInfo;
    const navigate = useNavigate();
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                        <h5>Price : $ {price}</h5>
                        <h5>Quantity : {quantity}</h5>
                        <h5>Supplier : {supplier}</h5>

                    </Card.Title>
                    <Card.Text>
                        <div>
                            <p>
                                {description.length > 200 ? description.slice(0, 200) : description} 
                                {description.length > 200 && ' ......'}
                            </p>
                            
                        </div>
                        <div className='mt-3 text-center'>
                            <Button className='w-75 mx-auto' onClick={()=> navigate(`/inventory/${_id}`)}>Update</Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CollectionCart;