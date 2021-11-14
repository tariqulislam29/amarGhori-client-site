import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-springs-86113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    const homeProduct = products.slice(0, 6);

    return (
        <div className="py-5 bg-color">
            <h5 className=" fw-light  text-center"><b>LATEST ARRIVALS</b></h5>
            <Row xs={1} md={4} className="g-4 m-4 ">
                {
                    homeProduct.map(item => <Product
                        key={item._id}
                        item={item}
                    ></Product>)

                }


            </Row>
        </div>
    );
};

export default Products;