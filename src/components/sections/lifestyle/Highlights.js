import React from "react";
import { Carousel } from "react-bootstrap";
import explore from "../../../assets/img/explore.webp";
import october from "../../../assets/img/october.webp";
import beach from "../../../assets/img/beach.jpg";

export default function Highlights() {
    return (
        <section className="tourism-travel-hero" style={{marginTop: 90}}>
            <div className="lifestyle-hero">
                <div
                    className="slider-home-banner slide"
                >
                    <Carousel
                        interval={1000}
                        indicators={false}
                        nextLabel={""}
                        prevLabel={""}
                        touch={true}
                        fade
                    >

                        <Carousel.Item >
                            <a href="/lifestyle">
                                <div 
                                    className="lifestyle-hero-image"
                                    style={{
                                        borderRadius: 0, 
                                        backgroundImage: `url(${october})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                        margin: '0'
                                    }}>
                                </div>
                                <Carousel.Caption>
                                    <div className="hightitle">
                                        <h5>October is a great time to get away.</h5>
                                        <p>If you're starved for vitamin D and wondering where to go in October...</p>
                                    </div>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/lifestyle">
                                <div 
                                    className="lifestyle-hero-image"
                                    style={{
                                        borderRadius: 0, 
                                        backgroundImage: `url(${explore})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                        margin: '0'
                                    }}>
                                </div>
                                <Carousel.Caption>
                                    <div className="hightitle">
                                        <h5>Explore the World</h5>
                                        <p>Travel guide, world tour, notable sites to visit.</p>
                                    </div>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>

                        <Carousel.Item>
                            <a href="/lifestyle">
                                <div 
                                    className="lifestyle-hero-image"
                                    style={{
                                        borderRadius: 0, 
                                        backgroundImage: `url(${beach})`, 
                                        backgroundSize: 'cover', 
                                        backgroundPosition: 'center',
                                        margin: '0'
                                    }}>
                                </div>
                                <Carousel.Caption>
                                    <div className="hightitle">
                                        <h5>Where's hot in November?</h5>
                                        <p>If you’re looking to escape to a holiday destination that's hot in November...</p>
                                    </div>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section> 
    );
}
