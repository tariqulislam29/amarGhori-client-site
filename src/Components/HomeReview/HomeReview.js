import React from 'react';
import './HomeReview.css'
import Rating from 'react-rating';
const HomeReview = ({ singleReview }) => {
    const { name, review, rating } = singleReview;
    return (
        <div>
            <div className="d-flex justify-content-center">
                <section class="main-container ">
                    <div class="main-box">

                        <div class="card-container">
                            <div class="review-card">
                                <div class="card-top">
                                    <p>{review}
                                    </p>
                                    <div class="card-bottom">
                                        <div class="prof">
                                            <img src="https://mpng.subpng.com/20181128/gif/kisspng-ninja-portable-network-graphics-computer-icons-ava-macmacmac-5bfea49c377331.5470002815434149402271.jpg" />
                                        </div>
                                        <div class="prof-detail">
                                            <h4>{name.toUpperCase()}</h4>
                                            <Rating
                                                initialRating={rating}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"
                                                readonly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeReview;