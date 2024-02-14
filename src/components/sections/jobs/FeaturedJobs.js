import React, { useEffect, useState } from "react";
import { substrwords } from "../../../utils/strings";
import parse from "html-react-parser";
import Loader from "../../../utils/Loader";
import { getApprovedKRJobs } from "../../../utils/actions";

export default function FeaturedJobs(props) {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getApprovedKRJobs()
            .then((res) => {
                setJobs(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            })
    }, []); 

    console.log(jobs)
    
    return (
        <section id="search-result" className="search-result">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h3 className="category-title">Featured Jobs</h3>

                        {loading ? (
                            <Loader />
                        ) : (
                            <>
                                {jobs && jobs.map((job, i) => (
                                    <a href={`jobs/${job._id}`} key={i}>
                                    <div className="d-md-flex post-entry-2 small-img jobs-card" >

                                        <div>
                                            <h3> {job.job_title}  {"  "} {job.location ? <span className="date">{job.location}</span> : null}</h3>
                                            <div className="post-meta">
                                                <span><span style={{fontWeight:'bold' }} >COMPANY:</span> {job.companyName} </span>
                                                <br/>
                                                <span><span style={{fontWeight:'bold' }} >Industry:</span> {job.job_industry} </span>
                                            </div>
                                            <p>{parse(substrwords(job.job_summary,200))} </p>
                                        </div>
                                    </div>
                                    </a>
                                ))}
                            </>
                        )}

                    </div> 

                    <div className="col-md-3">
                        <div className="trending">
                            <h3>Career Development</h3>
                            <ul className="trending-post">
                                <li>
                                <a href="single-post.html">
                                    <span className="number">1</span>   
                                    <h3>Top Ten Tips on Gaining Admission to Ivy League Universities</h3>
                                    <span className="author">Kimberly Ryan</span>
                                </a>
                                </li>
                                <li>
                                <a href="single-post.html">
                                    <span className="number">2</span>
                                    <h3>6 European Countries That Do Not Require IELTS</h3>
                                    <span className="author">Wade Warren</span>
                                </a>
                                </li>
                                <li>
                                <a href="single-post.html">
                                    <span className="number">3</span>
                                    <h3>These 9 Universities Have Waived Application Fee For Nigerians</h3>
                                    <span className="author">Esther Howard</span>
                                </a>
                                </li>
                                <li>
                                <a href="single-post.html">
                                    <span className="number">4</span>
                                    <h3>9 Tips on How To Relocate With Your Family To The United Kingdom</h3>
                                    <span className="author">Cameron Williamson</span>
                                </a>
                                </li>
                                <li>
                                <a href="single-post.html">
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
    );
}
