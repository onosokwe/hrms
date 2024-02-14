import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import { getRestaurants } from "../../../utils/actions";

export default function Hotels() {
    const [loading, setLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants('local')
            .then((res) => {
                setRestaurants(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response.data);
            })
    }, []); 

    return (
        <div>
            <Header />
            <section className="entertainment_hero">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <div className="hero_main">
                                <h1>Find the right hotel or restaurant today <br /></h1>
                                <div className="search_form_box">
                                    <div className="form-group btn-group">
                                        <input 
                                            type="search" 
                                            placeholder="Enter keyword" 
                                            className="form-control" 
                                            name="keyword" 
                                            required 
                                        />
                                        <button className="btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section  className="home-restaurant" style={{}}>
                <div className="container">
                    <div className="row">
                        
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                        {restaurants && restaurants.map((restaurant, i) => (
                            <div className="col-md-6" key={i}>
                                <div className="divs">
                                    <div className="row">
                                        <div className="col-5">
                                            <div 
                                                className="hotel-right" 
                                                style={{backgroundImage: `url(${restaurant.banner})`}}>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="">
                                                <h6 className="card-title">{restaurant.restaurant_name}</h6>
                                                <div className="stars">
                                                    <i className="bi bi-star"></i>
                                                    <i className="bi bi-star"></i>
                                                    <i className="bi bi-star"></i>
                                                    <i className="bi bi-star"></i>
                                                    <i className="bi bi-star"></i>
                                                </div>
                                                <small>
                                                    <i className="bi bi-h-square"></i> {restaurant.restaurant_category}
                                                </small>
                                                <small>
                                                    <i className="bi bi-compass"></i> {restaurant.restaurant_address}
                                                </small>
                                                <a
                                                    href={restaurant.restaurant_website ? 
                                                        restaurant.restaurant_website : 
                                                        "https://www.kracada.com"
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-warning btn-sm order-btn"
                                                >
                                                    View
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </> )}
                    </div>
                </div>
            </section>
                        
            <Footer />
        </div>
    );
}
