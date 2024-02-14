import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { substrwords } from "../../../utils/strings";
import { getAllLifestyles } from "../../../utils/actions";

export default function Entertainment() {
    const [loading, setLoading] = useState(true);
    const [music, setMusic] = useState([]);
    const [tourism, setTourism] = useState([]);
    const [health, setHealth] = useState([]);
    const [food, setFood] = useState([]);
    
    useEffect(() => {
        getAllLifestyles()
            .then((res) => {
                setMusic(res.data.music);
                setTourism(res.data.tourism);
                setHealth(res.data.health);
                setFood(res.data.food);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response.data);
            })
    console.log(loading)
    }, []); 


    return (
        <>
        <Header />
            {/* add search and filter */}

            <section className="entertainment_hero">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <div className="hero_main">
                                <h1>Lifestyle and Entertainment <br />in one place!</h1>
                                <div className="hero_btns">
                                    <a href="/lifestyle/hotels" className="btn btn-lifestyle mr-3">Hotels</a>
                                    <a href="/lifestyle/restaurants" className="btn btn-jobs mr-3">Restaurants</a>
                                    <a href="/lifestyle/music" className="btn btn-careers mr-3">Music</a>
                                    <a href="/lifestyle/tourism" className="btn btn-news">Tourism</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </section> 
            
            <section style={{backgroundColor: '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Lifestyle and Entertainment</h2>
                            </div>
                        </div>
                        {health && health.length > 0 ? (
                            health && health.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.title}
                                                    </a>
                                                </h2>
                                                <p>
                                                    {news_item.details ? substrwords(news_item.details && news_item.details,160) : null}
                                                </p>
                                                <small>
                                                    {new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img 
                                                    src={news_item.img_url ? news_item.img_url : 'https://placehold.co/600x400@2x.png'} 
                                                    alt="news"
                                                    className="img-fluid news-img" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>

            <section id="posts" className="posts" style={{backgroundColor: '#ebecf0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Tourism</h2>
                            </div>
                        </div>
                        {tourism && tourism.length > 0 ? (
                            tourism && tourism.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.title}
                                                    </a>
                                                </h2>
                                                <p>
                                                    {news_item.details ? substrwords(news_item.details && news_item.details,160) : null}
                                                </p>
                                                <small>
                                                    {new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img 
                                                    src={news_item.img_url ? news_item.img_url : 'https://placehold.co/600x400@2x.png'} 
                                                    alt="news"
                                                    className="img-fluid news-img" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>

            <section id="posts" className="posts" style={{backgroundColor: '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Food</h2>
                            </div>
                        </div>
                        {food && food.length > 0 ? (
                            food && food.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.title}
                                                    </a>
                                                </h2>
                                                <p>
                                                    {news_item.details ? substrwords(news_item.details && news_item.details,160) : null}
                                                </p>
                                                <small>
                                                    {new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img 
                                                    src={news_item.img_url ? news_item.img_url : 'https://placehold.co/600x400@2x.png'} 
                                                    alt="news"
                                                    className="img-fluid news-img" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>
                
            <section id="posts" className="posts" style={{backgroundColor: '#ebecf0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Music</h2>
                            </div>
                        </div>
                        {music && music.length > 0 ? (
                            music && music.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.title}
                                                    </a>
                                                </h2>
                                                <p>
                                                    {news_item.details ? substrwords(news_item.details && news_item.details,160) : null}
                                                </p>
                                                <small>
                                                    {new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img 
                                                    src={news_item.img_url ? news_item.img_url : 'https://placehold.co/600x400@2x.png'} 
                                                    alt="news"
                                                    className="img-fluid news-img" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
