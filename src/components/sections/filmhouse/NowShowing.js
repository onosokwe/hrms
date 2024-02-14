import React, {useState, useEffect } from "react";
import axios from "axios";

export default function ThreeLifestyles() {
    const [nowshowing, setNowshowing] = useState([]);
    const [soon, setSoon] = useState([]);

    useEffect(() => {
        axios.get('https://fh-api.filmhouseng.com/movie/movie-banners?platform=WEB')
        .then((res)=> {
            setNowshowing(res.data.data)
        }).catch((err)=> {
            console.log(err.response)
        })
    }, []);

    useEffect(() => {
        axios.get('https://fh-api.filmhouseng.com/movie/new-coming-soon?platform=WEB')
        .then((res)=> {
            setSoon(res.data.data)
        }).catch((err)=> {
            console.log(err.response)
        })
    }, []);

    return (
        <>
            <section className="filmhouse-highlights">
                <div className="container">
                    <div className="row g-5">
                    <h2 className="text-center">Now Showing</h2>
                    {nowshowing && nowshowing.length > 0 ? (
                        nowshowing && nowshowing.map((news_item, i) => (
                        <div className="highlights" key={i}>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${news_item.mobile_image})`, 
                                    backgroundPosition:'center'
                                }}>
                                    <div className="full-cover">
                                        <div className="inner-highlight">
                                            <h4>{news_item.movie_name}</h4>
                                            <p>Release Date: {new Date(news_item.release_date).toDateString()}</p>
                                        </div>
                                    </div>
                            </div>
                            <a target="_blank" href={news_item.youtube_link} rel="noreferrer" >
                                Watch Trailer <i className="fa fa-caret-right"></i>
                            </a>  
                            <a target="_blank" href={`https://www.filmhouseng.com/movie/${news_item.movie_id}`} rel="noreferrer" className="tickets">
                                Buy Tickets <i className="fa fa-caret-right"></i>
                            </a>
                        </div>
                        ))
                    ) : null }

                    </div> 
                </div>
            </section> 

            <section className="filmhouse-highlights">
                <div className="container">
                    <div className="row g-5">
                    <h2 className="text-center">Coming Soon </h2>
                    {soon && soon.length > 0 ? (
                        soon && soon.map((news_item, i) => (
                        <div className="highlights" key={i}>
                            <div 
                                className="highlight-image"
                                style={{
                                    backgroundImage: `url(${news_item.movie_poster})`, 
                                    backgroundPosition:'center'
                                }}>
                                    <div className="full-cover">
                                        <div className="inner-highlight">
                                            <h4>{news_item.movie_name}</h4>
                                            <p>Release Date: {new Date(news_item.release_date).toDateString()}</p>
                                        </div>
                                    </div>
                            </div>
                            <a target="_blank" href={news_item.youtube_link} rel="noreferrer" >
                                Watch Trailer <i className="fa fa-caret-right"></i>
                            </a>  
                            <a target="_blank" href={`https://www.filmhouseng.com/movie/${news_item.movie_id}`} rel="noreferrer" className="tickets">
                                Buy Tickets <i className="fa fa-caret-right"></i>
                            </a>  
                        </div>
                        ))
                    ) : null }

                    </div> 
                </div>
            </section> 
        </>
    );
}
