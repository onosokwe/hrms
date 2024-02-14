import React from "react";
import { substrwords } from "../../../utils/strings";

function AllNews(props) {
    const { business, nigerian, international, technology } = props.data;

    return (
        <>
            <section style={{marginTop: 90, backgroundColor: '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Nigerian News</h2>
                            </div>
                            <div className="section-header justify-content-between align-items-center">
                                <a href="/news/nigerian" style={{ display:"block", float:'right', marginTop:-30, color: '#fff', backgroundColor:'#f60', borderRadius: 6, fontSize: 15, paddingTop: 5, paddingRight: 14, paddingLeft: 14, paddingBottom: 5 }}>See All</a>
                            </div>
                            
                        </div>

                        {nigerian && nigerian.length > 0 ? (
                            nigerian && nigerian.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.news_title}
                                                    </a>
                                                </h2>
                                                <p>{substrwords(news_item.news_details,160)}</p>
                                                <small>{new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img src={news_item.featuredImg} alt="news" className="img-fluid news-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>

            <section style={{backgroundColor: '#ebecf0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>International News</h2>
                            </div>
                            <div className="section-header justify-content-between align-items-center">
                                <a href="/news/international" style={{ display:"block", float:'right', marginTop:-30, color: '#fff', backgroundColor:'#f60', borderRadius: 6, fontSize: 15, paddingTop: 5, paddingRight: 14, paddingLeft: 14, paddingBottom: 5 }}>See All</a>
                            </div>
                        </div>

                        {international && international.length > 0 ? (
                            international && international.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.news_title}
                                                    </a>
                                                </h2>
                                                <p>{substrwords(news_item.news_details,160)}</p>
                                                <small>{new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img src={news_item.featuredImg} alt="news" className="img-fluid news-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>

            <section style={{backgroundColor: '#fff'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Business News</h2>
                            </div>
                            <div className="section-header justify-content-between align-items-center">
                                <a href="/news/business" style={{ display:"block", float:'right', marginTop:-30, color: '#fff', backgroundColor:'#f60', borderRadius: 6, fontSize: 15, paddingTop: 5, paddingRight: 14, paddingLeft: 14, paddingBottom: 5 }}>See All</a>
                            </div>
                        </div>

                        {business && business.length > 0 ? (
                            business && business.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.news_title}
                                                    </a>
                                                </h2>
                                                <p>{substrwords(news_item.news_details,160)}</p>
                                                <small>{new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img src={news_item.featuredImg} alt="news" className="img-fluid news-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>
                
            <section style={{backgroundColor: '#ebecf0'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="section-header d-flex justify-content-between align-items-center">
                                <h2>Technology News</h2>
                            </div>
                            <div className="section-header justify-content-between align-items-center">
                                <a href="/news/technology" style={{ display:"block", float:'right', marginTop:-30, color: '#fff', backgroundColor:'#f60', borderRadius: 6, fontSize: 15, paddingTop: 5, paddingRight: 14, paddingLeft: 14, paddingBottom: 5 }}>See All</a>
                            </div>
                        </div>

                        {technology && technology.length > 0 ? (
                            technology && technology.map((news_item) => (
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                    <div className="news-card d-block mb-4">
                                        <div className="row">
                                            <div className="col-md-9 col-6">
                                                <h2>
                                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`}>
                                                        {news_item.news_title}
                                                    </a>
                                                </h2>
                                                <p>{substrwords(news_item.news_details,160)}</p>
                                                <small>{new Date(news_item.createdAt).toDateString()}</small>
                                            </div>
                                            <div className="col-md-3 col-6">
                                                <img src={news_item.featuredImg} alt="news" className="img-fluid news-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}


export default  AllNews;