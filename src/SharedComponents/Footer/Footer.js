import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div>
                <footer className="footer">
                    <div className="footer-left col-md-4 col-sm-6">
                        <p className="about">
                            <span> About Amar Ghori</span> A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.
                        </p>
                        <div className="icons">
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-google-plus"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="footer-center col-md-4 col-sm-6">
                        <div>
                            <i className="fas fa-map-marker-alt"></i>
                            <p><span> Street name and number</span> Demra, Dhaka, Bangladesh</p>
                        </div>
                        <div>
                            <i className="fa fa-phone"></i>
                            <p> (+00) 0000 000 000</p>
                        </div>
                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="#"> amarghori@company.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right col-md-4 col-sm-6">
                        <h2> Amar<span> Ghori</span></h2>
                        <p className="menu">
                            <a href="#"> Home</a> |
                            <a href="#"> Products</a> |
                            <a href="#"> Services</a> |
                            <a href="#"> News</a> |
                            <a href="#"> Contact</a>
                        </p>
                        <p className="name"> Amar Ghori &copy; 2021</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;