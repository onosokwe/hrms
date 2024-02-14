import React, { useEffect, useState } from "react";
import { substrwords } from "../../../utils/strings";
import Loader from "../../../utils/Loader";
import { getTopSectionNews } from "../../../utils/actions";
import TrendingCenter from "./TrendingCenter";

export default function HomeTrendingNews() {
    const [loading, setLoading] = useState(true);

    const [nigerian, setNigerian] = useState([]);
    // const [international, setInternational] = useState([]);
    const [business, setBusiness] = useState([]);
    // const [technology, setTechnology] = useState([]);

    useEffect(() => {
        getTopSectionNews()
            .then((res) => {
                // setNigerian(res.data.nigerian);
                setNigerian(res.data.international);
                setBusiness(res.data.business);
                // setTechnology(res.data.technology);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <section className="home-lists">
            <div className="container">
                <div className="row g-5">

                    {loading ? (
                        <Loader />
                        ) : (
                            <>  
                            <div className="col-md-6 col-sm-12 custom-border">
                                
                                {/* <h3 className="category-title">TOP NEWS</h3> */}

                                <TrendingCenter />
                            </div>

                            <div className="col-md-3 col-sm-6 border-start custom-border">
                                <a href="/news" style={{ float:'right', marginTop:20, color: '#fff', backgroundColor:'#f60', borderRadius: 6, fontSize: 13, paddingRight: 10, paddingLeft: 10, paddingBottom: 3 }}>See All</a>
                                <h3 className="category-title">Trending</h3>

                                {nigerian && nigerian.length > 0 ? (
                                    nigerian && nigerian.map((news_item) => (
                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`} key={news_item._id}>
                                        <div className="listed-item">
                                            <h2>{substrwords(news_item.news_title,100)}</h2>
                                        </div>
                                    </a>
                                    ))
                                ) : null }
                            </div>

                            <div className="col-md-3 col-sm-6 border-start custom-border" >

                            <a href="/news" style={{ float:'right', marginTop:20, color: '#fff', backgroundColor:'#f60',        borderRadius: 6, fontSize: 13, paddingRight: 10, paddingLeft: 10, paddingBottom: 3 }}>See All</a>

                                <h3 className="category-title">Latest</h3>

                                {business && business.length > 0 ? (
                                    business && business.map((news_item) => (
                                    <a href={`news/${news_item.news_category.toLowerCase()}/${news_item._id}`} key={news_item._id}>
                                        <div className="listed-item" key={news_item._id} >
                                            <h2>{substrwords(news_item.news_title,50)}</h2>
                                        </div>
                                    </a>
                                    ))
                                ) : null }
                            </div>

                        </>
                    )}

                </div> 
            </div>
        </section> 
    );
}
