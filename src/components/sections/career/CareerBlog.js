import React, { useEffect, useState } from "react";
import Loader from "../../../utils/Loader";
import { getAllCareers } from "../../../utils/actions";

export default function CareerBlog() {
    const [loading, setLoading] = useState(true);
    // const [nigerian, setNigerian] = useState([]);

    useEffect(() => {
        getAllCareers()
            .then((res) => {
                console.log(res.data)
                // setNigerian(res.data.nigerian);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>  
                    {/* {nigerian && nigerian.length > 0 ? (
                        nigerian && nigerian.map((news_item) => ( */}
                        <div className="col-md-3 col-lg-3 col-sm-6 custom-border" >
                            <a href="/career" >
                                <div className="post-entry-1" >
                                    <img src="https://www.jobberman.com/discover/wp-content/uploads/2023/09/business-development-and-sales-390x205.jpg" alt="" 
                                    className="img-fluid" />
                                    <h2>Getting Ahead in Business Development and Sales</h2>
                                </div>
                            </a>
                        </div>


                        <div className="col-md-3 col-lg-3 col-sm-6 custom-border" >
                            <a href="/career" >
                                <div className="post-entry-1" >
                                    <img src="https://www.jobberman.com/discover/wp-content/uploads/2023/09/ccf-2023-jobseekers-blog-390x205.png" alt="" 
                                    className="img-fluid" />
                                    <h2>Discover Limitless Possibilities at the Creative Industry</h2>
                                </div>
                            </a>
                        </div>


                        <div className="col-md-3 col-lg-3 col-sm-6 custom-border" >
                            <a href="/career" >
                                <div className="post-entry-1" >
                                    <img src="https://www.jobberman.com/discover/wp-content/uploads/2023/07/banner-illustration-hr-career-390x205.jpg" alt="" 
                                    className="img-fluid" />
                                    <h2>Tips and Insights on Becoming a Successful HR Professional</h2>
                                </div>
                            </a>
                        </div>


                        <div className="col-md-3 col-lg-3 col-sm-6 custom-border" >
                            <a href="/career" >
                                <div className="post-entry-1" >
                                    <img 
                                        src="https://www.jobberman.com/discover/wp-content/uploads/2023/07/illustration-nigerias-creative-sector-banner-creative-390x205.jpg" alt="" 
                                        className="img-fluid" 
                                    />
                                    <h2>Trends in Nigeria's Creative Industry You Should Plug Into</h2>
                                </div>
                            </a>
                        </div>


                        

                        {/* ))
                    ) : null } */}
                
                </>
            )}
        </>
    );
}
