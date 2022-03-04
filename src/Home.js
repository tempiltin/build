import React from "react";
import { Link } from "react-router-dom";
import { } from "reactstrap"

function Home() {
    return (
        <>
            <div id="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-content">
                                <div className="inner-content">
                                    <h4>KlassyCafe</h4>
                                    <h6>THE BEST EXPERIENCE</h6>
                                    <div className="main-white-button scroll-to-section">
                                        <Link to="#reservation">Make A Reservation</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="main-banner header-text">
                                <div className="Modern-Slider">
                                    <div className="item">
                                        <div className="img-fill">
                                            <img src="/public/assets/images/slide-01.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="img-fill">
                                            <img src="assets/images/slide-02.jpg" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="section" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="left-text-content">
                                <div className="section-heading">
                                    <h6>About Us</h6>
                                    <h2>We Leave A Delicious Memory For You</h2>
                                </div>
                                <p>
                                    Klassy Cafe is one of the best <Link to="#" target="_blank" rel="sponsored">restaurant HTML templates</Link>
                                    with Bootstrap v4.5.2 CSS framework. You can download and feel free to use this website template layout for your restaurant business. You are allowed to use this template for commercial purposes. <br></br> <br></br>You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please contact us for more information</p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src="assets/images/about-thumb-01.jpg" alt=""></img>
                                    </div>
                                    <div className="col-4">
                                        <img src="assets/images/about-thumb-02.jpg" alt=""></img>
                                    </div>
                                    <div className="col-4">
                                        <img src="assets/images/about-thumb-03.jpg" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-12">
                            <div className="right-content">
                                <div className="thumb">
                                    <a rel="nofollow" href="#!"><i class="fa fa-play"></i></a>
                                    <img src="assets/images/about-video-bg.jpg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="section-heading">
                                <h6>Our Menu</h6>
                                <h2>Our selection of cakes with quality taste</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Home