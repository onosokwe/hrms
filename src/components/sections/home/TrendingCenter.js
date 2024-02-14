import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../../assets/img/slide1.bd4d8a11.png";
import slide2 from "../../../assets/img/slide2.6f00078c.png";
import slide3 from "../../../assets/img/slide3.c2be0fc8.png";
import slide4 from "../../../assets/img/slide4.cc6de269.png";
// import filmhouse from "../../../assets/img/filmhouse.jpeg";

function TrendingCenter() {
    return (
        <section className="home-center" style={{marginTop: 45}}>
            <div
                className="slider-home-banner carousel slide"
                data-ride="carousel"
            >
                <Carousel
                    interval={3000}
                    indicators={false}
                    nextLabel={""}
                    prevLabel={""}
                    touch={true}
                    fade
                >
                    {/* <Carousel.Item>
                        <a href="/filmhouse">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${filmhouse})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <a href="/hotels-restaurants">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide1})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="/news">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide2})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/lifestyle">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide3})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="/hotels-restaurants">
                            <div 
                                className="home-center-image"
                                style={{
                                    borderRadius: 0, 
                                    height: 350, 
                                    backgroundImage: `url(${slide4})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center', 
                                    margin: '0'
                                }}>
                            </div>
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>

        </section>
    );
}

export default TrendingCenter;