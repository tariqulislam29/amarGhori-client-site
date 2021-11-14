import React from 'react';
import './ShopByBrand.css'
const ShopByBrand = () => {
    return (
        <div className=" bg-dark py-5 ">
            <h5 className=" fw-light text-white my-5  text-center"><b>SHOP BY BRAND</b></h5>
            <div className="d-flex justify-content-center py-5">
                <div className="row row-cols-1 row-cols-md-4 g-4 mx-3 text-center">
                    <div className="col">
                        <div className="card card-img">
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/09/banner-9.png" className="card-img-top" alt="..." />
                            <button className="butn">Castus Fiesta</button>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card card-img">
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-2.jpg" className="card-img-top" alt="..." />
                            <button className="butn">Daniel Wellington</button>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card card-img">
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-4.png" className="card-img-top" alt="..." />
                            <button className="butn">Fossil</button>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card card-img">
                            <img src="https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/cat-1.png" className="card-img-top" alt="..." />
                            <button className="butn">Maserati</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByBrand;