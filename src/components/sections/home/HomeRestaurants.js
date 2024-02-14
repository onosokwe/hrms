import React from "react";
import marriot from "../../../assets/img/marriot.jpg";
import sheratonlagos from "../../../assets/img/sheratonlagos.jpg";
import goldentulip from "../../../assets/img/goldentulip.jpg";

function HomeRestaurants() {
    return (
        <section  className="home-restaurant">
            <div className="container">
                <div className="row col-lg-12 mx-auto mb-5">
                    <header className="heading-line2 text-center">
                        <h4 className="title-section text-uppercase">Hotels Highlight</h4>
                    </header>
                </div>

                <div className="row">
                    <div className="col-md-5 mb-3">
                        <div 
                            className="hotel-left"
                            style={{backgroundImage: `url(${marriot})`}}>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="divs">
                            <div className="row">
                                <div className="col-5">
                                    <div className="hotel-right" style={{backgroundImage: `url(${sheratonlagos})`}}></div>
                                </div>
                                <div className="col-7">
                                    <div className="">
                                        <h6 className="card-title">Sheraton Lagos Hotel</h6>
                                        <div className="stars">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <small>
                                            <i className="bi bi-h-square"></i> Hotel
                                        </small>
                                        <small>
                                            <i className="bi bi-compass"></i> 30 Mobolaji Bank Anthony Way, Lagos State
                                        </small>
                                        <a
                                            href="https://www.marriott.com/en-us/hotels/lossi-sheraton-lagos-hotel/overview/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-warning btn-sm order-btn"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divs">
                            <div className="row">
                                <div className="col-5">
                                    <div className="hotel-right" style={{backgroundImage: `url(${goldentulip})`}}></div>
                                </div>
                                <div className="col-7">
                                    <div className="">
                                        <h6 className="card-title">Golden Tulip Festac Lagos</h6>
                                        <div className="stars">
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                        </div>
                                        <small>
                                            <i className="bi bi-h-square"></i> Hotel
                                        </small>
                                        <small>
                                            <i className="bi bi-compass"></i> Kaduna Rd, Amuwo Odofin Estate, Lagos
                                        </small>
                                        <a
                                            href="https://hotels.ng/hotel/29298-the-federal-palace-hotel-lagos"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn btn-warning btn-sm order-btn"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default  HomeRestaurants;