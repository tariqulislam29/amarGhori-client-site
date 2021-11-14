import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProduct = (props) => {
    const { item } = props;
    const { _id, price, name, img, description } = item;



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://thawing-springs-86113.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();
                    }
                });
        }
    }

    return (
        <div>
            <Col >

                <Card className="card card-design text-center ">
                    <Card.Img variant="top" src={img} className="image-size w-100" />
                    <Card.Body >
                        <Card.Title className="card-title text-center fw-light"><b>{name}</b> </Card.Title>
                        <p className=" text-black-50">{description}</p>
                        <h6 className=" text-black-50">${price}</h6>
                    </Card.Body>

                    <button className="  py-2 w-100 " onClick={() => { handleDelete(_id) }}>Delete Item</button>


                </Card>
            </Col>
        </div>
    );
};

export default ManageProduct;