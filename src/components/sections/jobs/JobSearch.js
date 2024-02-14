import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../utils/Loader";
import { substrwords } from "../../../utils/strings";
import { getTopSectionNews } from "../../../utils/actions";

export default function JobSearch() {
    const [business, setBusiness] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTopSectionNews()
            .then((res) => {
                setBusiness(res.data.business);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []); 

    return (
        <main id="main">
            <section style={{marginTop: 50, padding:0, marginBottom: 30}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <div style={{backgroundColor: "#291692", paddingTop: 100, paddingBottom: 100, color: "#fff", }}>
                                <h1 style={{fontSize: 55, marginBottom: 10}}>Job search can be a pain in the neck.<br/>Let us help you make it simple!</h1>
                                <p style={{fontSize: 20, marginBottom: 30, fontStyle:'italic', width: '50%', marginLeft: '25%'}}>
                                    Find articles and tips that can help you navigate the job market both locally and internationally.
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section> 
            
            <section  id="posts" className="posts">
                <div className="container">
                    <div className="row g-5">

                        {loading ? (
                            <Loader />
                        ) : (
                        <>  
                            {business && business.length > 0 ? (
                                business && business.map((news_item, index) => (
                                    <div className="col-md-3 col-sm-6" title={news_item.news_title} key={index}>
                                        <div className="post-entry-1" style={{backgroundColor: '#f0f0f0', padding: 20, marginBottom: 0}}>
                                            <Link to={{ pathname: `/news/${news_item.news_category.toLowerCase()}/${news_item._id}`}}>
                                                <img src={news_item.featuredImg || ""} alt="news" className="img-fluid" />
                                            </Link>
                                            
                                            <h2 className="mt-2">
                                                <Link to={{ pathname: `/news/${news_item.news_category.toLowerCase()}/${news_item._id}`}}>
                                                    {substrwords(news_item.news_title, 85)}
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                        </> )}
                    </div>  

                    <div className="col-md-12">
                        <div className="text-start py-4">
                            <div className="custom-pagination">
                                {/* <a href={`?page=${news.prevPage !== null ? news.prevPage : 1}`} className="prev">
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
                                </a> */}
                            </div>
                        </div>
                    </div>       
                </div>
            </section>

            <section className="search-result stay-updated" style={{backgroundColor: '#efefef'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="updated">
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <h4>Stay Updated</h4>
                                        <p>Searching for jobs that match your profile? Stay updated by filling the form below. We have over 4500 companies that post jobs regularly.</p>

                                        <div className="search-form" style={{width: '100%'}}>
                                            <label>Enter your email address:</label> <br />
                                            <div className="form-group btn-group">
                                            
                                                <input type="email" placeholder="Email" className="form-control" name="email" 
                                                style={{borderTopRightRadius: 0, display:'block', borderBottomRightRadius:0, width: '100%' }}/>
                                                <button className="btn" style={{background: "#ffdec8"}}>
                                                    Submit
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6 text-right">
                                        <div className="updated-talent"></div>
                                        {/* <img src={talent} className="img-responsive" alt="talent" /> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>        
                </div>
            </section>

        </main>
    );
}
