import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import radissonblue1 from "../../../assets/img/radissonblue1.webp";
import jobsImage from "../../../assets/img/post-portrait-7.jpg";

export default function Travel() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }); 

    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <section className="three-highlights" style={{marginTop: 80}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4">
                                <div className="highlights">
                                    <h2>Jobs and Career Development</h2>
                                    <div 
                                        className="highlight-image"
                                        style={{
                                            backgroundImage: `url(${jobsImage})`, 
                                        }}>
                                    </div>

                                    <a href="/jobs">Jobs <i className="fa fa-caret-right"></i></a>
                                </div>
                                
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="highlights">
                                    <h2>Hotels and Restaurants</h2>
                                    <div 
                                        className="highlight-image"
                                        style={{
                                            backgroundImage: `url(${radissonblue1})`, 
                                        }}>
                                    </div>
                                    <a href="/hotels-restaurants">Hotels <i className="fa fa-caret-right"></i></a>
                                </div>
                                
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <div className="highlights">
                                    <h2>Lifestyle and Entertainment</h2>
                                    <div 
                                        className="highlight-image"
                                        style={{
                                            backgroundImage: `url(${radissonblue1})`, 
                                        }}>
                                    </div>
                                    <a href="/lifestyle">Lifestyle <i className="fa fa-caret-right"></i></a>
                                </div>
                                
                            </div>
                        </div> 
                    </div>
                </section> 
            )}
            <Footer />
        </div>
    );
}
