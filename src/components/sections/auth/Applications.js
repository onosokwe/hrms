import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import isLoggedIn from "../../../utils/isLoggedIn";
import { alertError } from "../../../utils/alerts";
import { getUserAppliedJobs } from "../../../utils/actions";
import { substrwords } from "../../../utils/strings";

export default function Applications(props) {
    const [loading, setLoading] = useState(true);
    const [jobs, setAppliedJobs] = useState([]);
    const TOKEN = localStorage.getItem("kracada:token");

    useEffect(() => {
        if (!isLoggedIn()) {
            props.history.push("/account/login");
            alertError("Please login to continue");
        } else {
            getUserAppliedJobs()
                .then((res) => {
                    setLoading(false);
                    setAppliedJobs(res.data.data);
                })
                .catch((err) => {
                    setLoading(false);
                    alertError(err.response.data.error);
                });
        }
    }, [TOKEN, props.history]);

    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <main id="main">
                    <section id="search-result" className="search-result">
                        <div className="container">
                            <div className="row">
                               
                                <div className="col-md-3">
                                    <div className="trending">
                                        <h3>Account Profile</h3>
                                        <ul className="trending-post">
                                            <li>
                                                <a href="/account/profile">
                                                    <span className="number">1</span>   
                                                    <h3>My Profile</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/applied-jobs">
                                                    <span className="number">2</span>   
                                                    <h3>My Job Applications</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/update-profile">
                                                    <span className="number">3</span>   
                                                    <h3>Update My Profile</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/profile">
                                                    <span className="number">4</span>   
                                                    <h3>My Restaurants</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" onClick={() => {
                                                    localStorage.clear();
                                                    window.location.reload();
                                                    }}
                                                    style={{display: "block"}}
                                                >
                                                    <span className="number">5</span>   
                                                    <h3>Logout</h3>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-9">
                                    <div className="bg-white">
                                        <div className="row">
                                            {jobs && jobs.map((job, i) => (
                                                <div className="col-md-6 col-sm-6 col-xs-12" key={i}>
                                                    <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                        <div>
                                                            <h3 className="job-title">{job.job_id.job_title} {"  "} 
                                                            <span className="date">{job.job_id.location ? job.job_id.location : null} </span> </h3>
                                                            <div className="post-meta">
                                                                <span>{job.job_id.companyName} </span>
                                                            </div>
                                                            <p>{(job.job_id.job_summary && job.job_id.job_summary) ? parse(substrwords(job.job_id.job_summary,100)) : null} </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div> 
                            </div>        
                        </div>
                    </section>
                </main>
            )}
            <Footer />
        </div>
    );
}
