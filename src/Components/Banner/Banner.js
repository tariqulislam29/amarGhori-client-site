import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="mb-5">
                <Carousel  >
                    <Carousel.Item >
                        <img
                            className="d-block res-image "
                            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption >
                            <span>TIMELESS & ELEGANT</span>
                            <br />
                            <h3>NEW ARRIVALS </h3>
                            <span>Complete your everyday look with a classic leather strap watch.</span>
                            <br />
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block  res-image"
                            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider3.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <span>TIMELESS & ELEGANT</span>
                            <br />
                            <h3>THE CLASSICS </h3>

                            <span>Complete your everyday look with a classic leather strap watch.</span>
                            <br />
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block res-image "
                            src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/10/slider1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <span>TIMELESS & ELEGANT</span>
                            <br />
                            <h3>BEST SELLER </h3>

                            <span>Complete your everyday look with a classic leather strap watch.</span>
                            <br />
                            <button>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;