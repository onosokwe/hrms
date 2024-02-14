import React from "react";
import travel from "../../../assets/img/travel.jpg";
import entertain from "../../../assets/img/entertain.webp";
import restaurant from "../../../assets/img/restaurant.jpg";

export default function ThreeLifestyles() {

    return (
        <section className="three-highlights">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4 col-sm-4">
                        <div className="highlights">
                            <h2>Movies and Entertainment</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${entertain})`, 
                                    backgroundPosition:'center'
                                }}>
                                    <div className="full-cover">
                                        <div className="inner-highlight">
                                            <p>Lifestyle and Entertainment.</p>
                                        </div>
                                    </div>
                            </div>
                            <a href="/filmhouse">Filmhouse Cinema Movies <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="highlights">
                            <h2>Travel and Tourism</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${travel})`, 
                                }}>
                                    <div className="full-cover">
                                        <div className="inner-highlight">
                                            <p>Travel trends, vibes, guide and tips.</p>
                                        </div>
                                    </div>
                            </div>
                            <a href="/travel-tourism">Travel and Tourism <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>

                    <div className="col-md-4 col-sm-4">
                        <div className="highlights">
                            <h2>Restaurants</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${restaurant})`, 
                                }}>
                                    <div className="full-cover">
                                        <div className="inner-highlight">
                                            <p>Browse the venues voted into The World's 50 Best Restaurants</p>
                                        </div>
                                    </div>
                            </div>
                            <a href="https://www.theworlds50best.com/" target="_blank" 
                            rel="noreferrer">Worlds Best Restaurants <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </section> 
    );
}
