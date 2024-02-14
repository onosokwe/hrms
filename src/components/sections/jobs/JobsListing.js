import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loader from "../../../utils/Loader";
import { substrwords } from "../../../utils/strings";
import { getAllJobs } from "../../../utils/actions";

export default function FeaturedJobs() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getAllJobs()
            .then((res) => {
                setJobs(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            })
    }, []); 
    
    return (
        <>
            <section id="search-result" className="search-result" style={{marginTop: 0}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 className="category-title">Top Jobs</h3>

                            {loading ? (
                                <Loader />
                            ) : (
                                <>
                                <div className="row">
                                    {jobs && jobs.map((job, i) => (
                                        <div className="col-md-6 col-sm-6 col-xs-12" key={i}>
                                            <a href={`jobs/${job._id}`}>
                                                <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                    <div>
                                                        <h3 className="job-title">{job.job_title} {"  "} 
                                                        <span className="date">{job.location ? job.location : null} </span> </h3>
                                                        <div className="post-meta">
                                                            <span><span style={{fontWeight:'bold' }} >Industry:</span> {job.job_industry} </span>
                                                        </div>
                                                        <p>{jobs.job_summary ? parse(substrwords(jobs.job_summary,100)) : null} </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            

                        </div> 

                        <div className="col-md-3">
                            <h3 className="category-title">Search Jobs</h3>

                            <div className="aside-block">
                                <div style={{ border:"1px solid #ccc", padding: 20, borderRadius: 7, paddingBottom: 10}}>
                                    <form action="" className="search-form">
                                        <div className="form-group btn-group">

                                            <input type="text" placeholder="Search" className="form-control" 
                                            style={{borderTopRightRadius: 0, borderBottomRightRadius:0 }}/>
                                            <button className="btn js-search-close" style={{background: "#ffdec8"}}>
                                                <span className="icon bi-search"></span>
                                            </button>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="trending">
                                <h3>Job Search Advice</h3>
                                <ul className="trending-post">
                                    <li>
                                    <a href="/jobs">
                                        <span className="number">1</span>   
                                        <h3>Top Ten Tips on Gaining Admission to Ivy League Univerities</h3>
                                        <span className="author">Kimberly Ryan</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/jobs">
                                        <span className="number">2</span>
                                        <h3>6 European Coutries That Do Not Require IELTS</h3>
                                        <span className="author">Wade Warren</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/jobs">
                                        <span className="number">3</span>
                                        <h3>These 9 Univerities Have Waived Application Fee For Nigerians</h3>
                                        <span className="author">Esther Howard</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/jobs">
                                        <span className="number">4</span>
                                        <h3>9 Tips on How To Relocate With Your Family To The United Kingdom</h3>
                                        <span className="author">Cameron Williamson</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="/jobs">
                                        <span className="number">5</span>
                                        <h3>Life Insurance And Pregnancy: A Working Mom's Guide</h3>
                                        <span className="author">Jenny Wilson</span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>        
                </div>
            </section>
        </>
    );
}
