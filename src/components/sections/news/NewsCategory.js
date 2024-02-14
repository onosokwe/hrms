import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { substrwords } from "../../../utils/strings";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import { getNewsCategory } from "../../../utils/actions";

export default function NewsCategory(props) {
    let { category } = props.match.params;
    category = category.charAt(0).toUpperCase() + category.slice(1);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let page = params.page || 1;

    const [loading, setLoading] = useState(true);
    const [news, setData] = useState([]);
    
    useEffect(() => {
        getNewsCategory(category, page)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            });
    }, [category, page]);

    return (
        <div>
            <Header />
                {loading ? (
                    <Loader />
                ) : (
                    <section id="posts" className="posts" style={{marginTop: 90, backgroundColor: '#fff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    <div className="section-header d-flex justify-content-between align-items-center">
                                        <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
                                    </div>
                                </div>
                                {news && news.data.length > 0 ? (
                                    news.data && news.data.map((news_item) => (
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" key={news_item._id}>
                                            <div className="news-card d-block mb-4">
                                                <div className="row">
                                                    <div className="col-md-9 col-6">
                                                        <h2><Link to={{ pathname: `/news/${category}/${news_item._id}`}}>
                                                            {/* <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`}> */}
                                                                {news_item.news_title}
                                                            {/* </a> */}
                                                            </Link>
                                                        </h2>
                                                        <p>{news_item.news_details ? substrwords(news_item.news_details && news_item.news_details,160) : null}</p>
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

                                <div className="col-md-12">
                                    <div className="text-start py-4">
                                        <div className="custom-pagination">
                                            <a href={`?page=${news.prevPage !== null ? news.prevPage : 1}`} className="prev">
                                                Previous
                                            </a>
                                            <a href={`?page=${news.currentPage !== null ? news.currentPage : ""}`} className="active">
                                                {news.currentPage ? news.currentPage : 1}
                                            </a>
                                            <a href={`?page=${news.currentPage !== null ? (news.currentPage + 1) : 4}`}>
                                                {news.currentPage ? (news.currentPage + 1) : 2}
                                            </a>
                                            <a href={`?page=${news.currentPage !== null ? (news.currentPage + 2) : 4}`}>
                                                {news.currentPage ? (news.currentPage + 2) : 3}
                                            </a>
                                            <a href={`?page=${news.currentPage !== null ? (news.currentPage + 3) : 4}`}>
                                                {news.currentPage ? (news.currentPage + 3) : 4}
                                            </a>
                                            <a href={`?page=${news.currentPage !== null ? (news.currentPage + 4) : 5}`}>
                                                {news.currentPage ? (news.currentPage + 4) : 5}
                                            </a>
                                            <a href={`?page=${news.nextPage !== null ? news.nextPage : 6}`} className="next">
                                                Next
                                            </a>
                                        </div>
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
