import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import { getJobById } from "../../../utils/actions";

function CareerSingle(props) {
    const { id } = props.match.params;
    const [loading, setLoading] = useState(true);
    const [job, setJob] = useState([]);

    useEffect(() => {
        getJobById(id)
            .then((res) => {
                setJob(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            })
    }, [id]); 
    
    return (
        <>
        <Header />        
        <section id="search-result" className="single-post-content mt-4">
            <div className="container">
                <div className="row" style={{marginTop: 45}}>
                    {loading ? <Loader /> : 
                    <>
                        
                        <div className="col-md-9 post-content mt-4">
                            <div className="single-post mt-4">
                                <h1 className="mb-5">{job.job_title && job.job_title} </h1>
                                
                                <h3 className="category-title">Job Requirements</h3>
                                
                                <p>{job.job_requirements && job.job_requirements}</p>

                                <h3 className="category-title">Job Responsibilities</h3>
                                
                                <p>{job.job_responsibilities}</p>

                                <h3 className="category-title">Job Summary</h3>
                                
                                <p>{job.job_summary}</p>
                            </div>
                        </div> 

                        <div className="col-md-3 mt-4">
                            <div className="trending">
                                <h3>Career Development</h3>
                                <ul className="trending-post">
                                    <li>
                                    <a href="single-post.html">
                                        <span className="number">1</span>   
                                        <h3>Top Ten Tips on Gaining Admission to Ivy League Univerities</h3>
                                        <span className="author">Kimberly Ryan</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="single-post.html">
                                        <span className="number">2</span>
                                        <h3>6 European Coutries That Do NOt Require IELTS</h3>
                                        <span className="author">Wade Warren</span>
                                    </a>
                                    </li>
                                    <li>
                                    <a href="single-post.html">
                                        <span className="number">3</span>
                                        <h3>These 9 Univerities Have Waived Application Fee For Nigerians</h3>
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
                    </> }
                </div>        
            </div>
        </section>
        <Footer />
        </>
    );
}

export default CareerSingle;