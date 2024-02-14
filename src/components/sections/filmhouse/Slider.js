import React, {useState, useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";

export default function Sliders() {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get('https://fh-api.filmhouseng.com/movie/movie-banners?platform=WEB')
        .then((res)=> {
            setBanners(res.data.data)
        }).catch((err)=> {
            console.log(err.response)
        })
    }, []);

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
                        {banners && banners.length > 0 ? (
                            banners && banners.map((news_item, i) => (
                            <Carousel.Item key={i}>
                                <a target="_blank" rel="noreferrer" href={`https://www.filmhouseng.com/movie/${news_item.movie_id}`}>
                                    <div 
                                        className="lifestyle-hero-image"
                                        style={{
                                            borderRadius: 0, 
                                            backgroundImage: `url(${news_item.web_image})`, 
                                            backgroundSize: 'cover', 
                                            backgroundPosition: 'center',
                                            margin: '0'
                                        }}>
                                    </div>
                                    <Carousel.Caption>
                                        <div className="hightitle">
                                            <h5>{news_item.movie_name}.</h5>
                                            <p>{news_item.description}</p>
                                        </div>
                                    </Carousel.Caption>
                                </a>
                            </Carousel.Item>
                            ))
                        ) : null }
                    </Carousel>
                </div>
            </div>
        </section> 
    );
}
