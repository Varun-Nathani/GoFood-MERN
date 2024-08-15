import React from 'react'
import pizza from '../images/Pizza.jpg';
import biryani from '../images/biryani.jpg';
import paneer from '../images/paneer-tikka.jpg';

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active h-25">
                        <img src={pizza} className="w-100" alt="..." style={{ "height": "700px" }} />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className='text-white fs-1'>Mix Veg Pizza</h5>
                            <p className='text-white fs-1'>Voted best pizza in Mumbai by TheFoodieClub</p>
                        </div>
                    </div>
                    <div className="carousel-item h-25">
                        <img src={biryani} className="w-100" alt="..." style={{ "height": "700px" }} />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className='text-white fs-1'>Chicken Biryani</h5>
                            <p className='text-white fs-1'>Melt in the mouth delicacy</p>
                        </div>
                    </div>
                    <div className="carousel-item h-25">
                        <img src={paneer} className="w-100 " alt="..." style={{ "height": "700px" }} />
                        <div className="carousel-caption d-none d-md-block ">
                            <h5 className='text-white fs-1'>Paneer Tikka</h5>
                            <p className='text-white fs-1'>Tandoori goodness like never before</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
