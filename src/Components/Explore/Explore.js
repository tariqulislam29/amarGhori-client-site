import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../SharedComponents/Footer/Footer';
import Menu from '../../SharedComponents/Menu/Menu';
import Product from '../Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://thawing-springs-86113.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div>
            <Menu></Menu>

            <div className="py-5 bg-color">
                <h5 className=" fw-light  text-center"><b>LATEST ARRIVALS</b></h5>
                <Row xs={1} md={4} className="g-4 m-4 ">
                    {
                        products.map(item => <Product
                            key={item._id}
                            item={item}
                        ></Product>)

                    }


                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;