import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './ManageAllOrder.css'

const ManageAllOrder = (props) => {
    const { order } = props;
    const { name, email, mobilenumber, address, quantity, status, id, _id } = order;



    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `https://thawing-springs-86113.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);


    // handle delete 

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://thawing-springs-86113.herokuapp.com/purchaseOrders/${id}`;
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

    // pending update 
    const handleUpdate = id => {

        axios.put(`https://thawing-springs-86113.herokuapp.com/purchaseOrders/${id}`)
            .then(response => {
                console.log(response);
                window.location.reload();
            }
            );

    }



    return (
        <div>
            <Col className="full-cards">
                <Card className="full-card">
                    <div className="mybook-section">
                        <div className="room-details-section">
                            <div className=" image-div">
                                <img src={product?.img} className="w-100 h-50" alt="" />
                            </div>
                            <div className="details-div d-flex align-items-center ps-2">
                                <div> <h5>{product?.name}</h5>
                                    <p>Price: {product?.price}</p></div>

                            </div>
                        </div>

                        <div className="order-details-section d-flex align-items-center">
                            <div className="  order-details">
                                <p>Name:{name}</p>
                                <p>Email:{email}</p>
                                <p>Mobile Number:{mobilenumber}</p>
                                <p>Address:{address} </p>
                                <p>Quantity:{quantity}</p>
                                <p className="text-danger">Status: {status}</p>
                            </div>


                        </div>

                        <div className="button-section d-flex align-items-center">
                            <button className="px-4 bg-dark my-3 text-white" onClick={() => { handleDelete(_id) }}>Delete</button>
                            <button className="px-4 my-3 bg-dark text-white" onClick={() => { handleUpdate(_id) }}>Update Pending</button>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ManageAllOrder;