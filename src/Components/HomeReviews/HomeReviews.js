import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeReview from '../HomeReview/HomeReview';


const HomeReviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://thawing-springs-86113.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="bg-dark  container ">
            <h3 className="text-center py-4 text-light">What our customer have to say!</h3>
            <Slider {...settings}>
                {
                    reviews.map(review => <HomeReview
                        key={review._id}
                        singleReview={review}

                    >

                    </HomeReview>)
                }
            </Slider>
        </div>
    );
};

export default HomeReviews;