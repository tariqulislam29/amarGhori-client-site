import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { item } = props;
    const { _id, price, name, img, description } = item;
    return (
        <div>
            <Col >

                <Card className="card card-design text-center ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title text-center fw-light"><b>{name}</b> </Card.Title>
                        <p className=" text-black-50">{description}</p>
                        <h6 className=" text-black-50">${price}</h6>
                    </Card.Body>
                    <Link to={`/purchaseOrder/${_id}`}>
                        <button className="  py-2 w-100 ">Buy Now</button>
                    </Link>

                </Card>
            </Col>
        </div>
    );
};

export default Product;