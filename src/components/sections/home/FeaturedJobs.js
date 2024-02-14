import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Loader from "../../../utils/Loader";
import { substrwords } from "../../../utils/strings";
import { getApprovedKRJobs } from "../../../utils/actions";

export default function HomeFeaturedJobs() {
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
    
    return (
        <section id="search-result" className="">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mx-auto mb-5">
                        <header className="heading-line2 text-center">
                            <h4 className="title-section text-uppercase">Jobs Highlight</h4>
                        </header>
                    </div>

                    <div className="col-md-12">
                        {loading ? (
                            <Loader />
                        ) : (
                            <>
                                <div className="row">
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[0]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[0].job_title}  {"  "} {jobs[0].location ? <span className="date">{jobs[0].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span>Industry:</span> {jobs[0].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[0].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href={`jobs/${jobs[1]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[1].job_title}  {"  "} {jobs[1].location ? <span className="date">{jobs[1].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span style={{fontWeight:'bold' }} >Industry:</span> {jobs[1].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[1].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[2]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[2].job_title}  {"  "} {jobs[2].location ? <span className="date">{jobs[2].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span style={{fontWeight:'bold' }} >Industry:</span> {jobs[2].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[2].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={`jobs/${jobs[3]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[3].job_title}  {"  "} {jobs[3].location ? <span className="date">{jobs[3].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span style={{fontWeight:'bold' }} >Industry:</span> {jobs[3].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[3].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <a href={`jobs/${jobs[4]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[4].job_title}  {"  "} {jobs[4].location ? <span className="date">{jobs[4].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span style={{fontWeight:'bold' }} >Industry:</span> {jobs[4].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[4].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href={`jobs/${jobs[5]._id}`} >
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3> {jobs[5].job_title}  {"  "} {jobs[5].location ? <span className="date">{jobs[5].location}</span> : null}</h3>
                                                    <div className="post-meta">
                                                        <span><span style={{fontWeight:'bold' }} >Industry:</span> {jobs[5].job_industry} </span>
                                                    </div>
                                                    <p>{parse(substrwords(jobs[5].job_summary,100))} </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>      
                            </>
                        )}
                    </div> 
                </div>        
            </div>
        </section>
    );
}
