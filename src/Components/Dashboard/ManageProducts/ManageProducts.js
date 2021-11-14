import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from './ManageProduct';



const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://thawing-springs-86113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <Row xs={1} md={3} className="g-4 m-4 ">
                {
                    products.map(item => <ManageProduct
                        key={item._id}
                        item={item}
                    ></ManageProduct>)

                }


            </Row>
        </div>
    );
};

export default ManageProducts;