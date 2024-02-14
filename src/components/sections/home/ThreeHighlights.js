import React
// , { useEffect, useState } 
 from "react";
// import { substrwords } from "../../../utils/strings";
// import Loader from "../../../utils/Loader";
// import { getTopSectionNews } from "../../../utils/actions";
// import TrendingCenter from "./TrendingCenter";
import radissonblue1 from "../../../assets/img/restaurant.jpg";
import jobsImage from "../../../assets/img/post-portrait-7.jpg";
import restaurant from "../../../assets/img/entertain.webp";
import bookings from "../../../assets/img/bg-bookings.png";


export default function Threehighlights() {
    // const [loading, setLoading] = useState(true);

    // const [nigerian, setNigerian] = useState([]);
    // const [international, setInternational] = useState([]);
    // const [business, setBusiness] = useState([]);
    // const [technology, setTechnology] = useState([]);

    // useEffect(() => {
    //     getTopSectionNews()
    //         .then((res) => {
    //             setNigerian(res.data.nigerian);
    //             setInternational(res.data.international);
    //             setBusiness(res.data.business);
    //             setTechnology(res.data.technology);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log(err.response);
    //         });
    // }, []);

    return (
        <section className="three-highlights">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-3 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <h2>Jobs and Career Development</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${jobsImage})`, 
                                }}>
                            </div>

                            <a href="/jobs">Jobs and Career <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>

                    <div className="col-md-3 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <h2>Hotels and Restaurants</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${radissonblue1})`, 
                                }}>
                            </div>
                            <a href="/hotels-restaurants">Hotels and Restaurants <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>

                    <div className="col-md-3 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <h2>Lifestyle and Entertainment</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${restaurant})`, 
                                }}>
                            </div>
                            <a href="/lifestyle">Lifestyle and Entertainment <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>

                    <div className="col-md-3 col-sm-12 col-xs-12 col-12">
                        <div className="highlights">
                            <h2>Filmhouse Cinema Movies</h2>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${bookings})`, 
                                }}>
                            </div>
                            <a href="/filmhouse">Cinema Movies <i className="fa fa-caret-right"></i></a>
                        </div>
                        
                    </div>
                </div> 
            </div>
        </section> 
    );
}
