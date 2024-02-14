import React from "react";
import { Carousel } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";

import booking from "../../../assets/img/booking.svg";
import tripsvg from "../../../assets/img/tripsvg.svg";
import hotels from "../../../assets/img/hotels.svg";
import hyatt from "../../../assets/img/hyatt.svg";
import inter from "../../../assets/img/inter.svg";
import hotelsng from "../../../assets/img/logo.png";

import explore from "../../../assets/img/explore.webp";
import october from "../../../assets/img/october.webp";
import beach from "../../../assets/img/beach.jpg";
import nexttrip from "../../../assets/img/nexttrip.jpg";

import london from "../../../assets/img/london.jpg";
import amsterdam from "../../../assets/img/amsterdam.jpg";
import dubai from "../../../assets/img/dubai.jpg";

import newyork from "../../../assets/img/newyork.jpg";
import paris from "../../../assets/img/paris.jpg";
import barcelona from "../../../assets/img/barcelona.jpg";

import tenerife from "../../../assets/img/tenerife.jpg";
import dublin from "../../../assets/img/dublin.jpg";
import rome from "../../../assets/img/rome.jpg";

import accra from "../../../assets/img/accra.webp";
import joburg from "../../../assets/img/joburg.webp";
import lagos from "../../../assets/img/lagos.webp";

import abuja from "../../../assets/img/abuja.webp";
import capetown from "../../../assets/img/capetown.webp";
import edinburg from "../../../assets/img/edinburg.jpg";

export default function TravelTourism() {
    return (
        <div>
            <Header />
            
            <div className="tourism-travel-hero" style={{marginTop: 90}}>
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
                                    className="tourism-travel-hero-image"
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
                                        <h5>October is a great time to get away.</h5>
                                        <p>If you're starved for vitamin D and wondering where to go in October...</p>
                                    </div>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/lifestyle">
                                <div 
                                    className="tourism-travel-hero-image"
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
                                        <h5>Explore the World</h5>
                                        <p>Travel guide, world tour, notable sites to visit.</p>
                                    </div>
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>

                        <Carousel.Item>
                            <a href="/lifestyle">
                                <div 
                                    className="tourism-travel-hero-image"
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

            <section className="tourism-hotels">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>
                                Get the best prices from top hotel providers
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box">
                                <img src={booking} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box">
                                <img src={tripsvg} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box" >
                                <img src={hotels} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box">
                                <img src={hyatt} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box">
                                <img src={inter} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                            <div className="box">
                                <img src={hotelsng} alt="booking" style={{height: 45}}/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="tourism-hotels">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div 
                                className="box" 
                                style={{
                                    borderRadius: 9, 
                                    backgroundImage: `url(${nexttrip})`, 
                                    backgroundSize: 'cover', 
                                    backgroundPosition: 'center',
                                    margin: '0',
                                    padding:0, 
                                    marginBottom: 50,
                                    height:450,
                                    width:'auto',
                                    position:"relative"
                            }}>
                                <div style={{color:"#fff", textAlign:"left", position:"absolute", top: '20%', left: "60px"}}>
                                    <h2 style={{fontSize: 42, fontWeight:"bold", marginBottom: 20}}>Save on your <br />next trip</h2>
                                    <p style={{fontSize: 16, fontWeight:"bold", marginBottom: 30}}>Save up to 35% with these top <br/> offers from around the globe</p>
                                    <a href="https://www.skyscanner.net/hotels/deals?source=hotels-home"  rel="noreferrer" target="_blank" 
                                        style={{backgroundColor:"#f60", color:"#fff", fontSize: 15, fontWeight:"bold", borderRadius: 4,
                                paddingRight: 20, paddingLeft: 20, paddingTop: 6, paddingBottom: 8}}>Get Deals</a>
                                </div>
                                {/* <img src={nexttrip} alt="booking" className="img-fluid"/> */}
                            </div>
                        </div>
                        
                    </div>

                </div>
            </section>

            <section className="tourism-destinations">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>
                                Need Inspiration?
                            </h2>
                            <p className="subtitle">Here are our hand-picked top world destinations.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${london})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>London</h3>
                                        <p>United Kingdom</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${amsterdam})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Amsterdam</h3>
                                        <p>Netherlands</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${dubai})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Dubai</h3>
                                        <p>United Arab Emirates</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${newyork})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>New York</h3>
                                        <p>United States</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${paris})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Paris</h3>
                                        <p>France</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${barcelona})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Barcelona</h3>
                                        <p>Spain</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${tenerife})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Tenerife</h3>
                                        <p>Spain</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${dublin})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Dublin</h3>
                                        <p>Ireland</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${rome})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Rome</h3>
                                        <p>Italy</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${accra})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Accra</h3>
                                        <p>Ghana</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${lagos})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Lagos</h3>
                                        <p>Nigeria</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${capetown})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Cape Town</h3>
                                        <p>South Africa</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${joburg})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Johannesburg</h3>
                                        <p>South Africa</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${abuja})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Abuja</h3>
                                        <p>Nigeria</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div 
                                className="destination-image"
                                style={{
                                    backgroundImage: `url(${edinburg})`, 
                                }}>
                                    <div className="inner-destination">
                                        <h3>Edinburg</h3>
                                        <p>United Kingdom</p>
                                    </div>
                            </div>
                        </div>

                    </div> 
                </div>
            </section> 
            
            <Footer />
        </div>
    );
}
