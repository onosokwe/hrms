import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import parse from "html-react-parser";
import amountWithCommas from "../../../utils/amountFormmater";
import { ucWords } from "../../../utils/strings";
import { getJobById, applyToJob } from "../../../utils/actions";
import { alertSuccess, alertError } from "../../../utils/alerts";
import isLoggedIn from "../../../utils/isLoggedIn";

function JobSingle(props) {
    const { id } = props.match.params;
    const [loading, setLoading] = useState(true);
    const [loadingApply, setLoadingApply] = useState(false);
    const [job, setJob] = useState([]);

    useEffect(() => {
        getJobById(id)
            .then((res) => {
                setJob(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response.data);
            })
    }, [id]); 

    const handleApply = (job_id) => {
        if (!isLoggedIn()) {
          props.history.push("/account/login");
          alertError("Please login to apply.");
        } else {
            if (
                window.confirm(
                "Note: Application will be submitted using your current profile. Are you sure you want to continue?"
                )
            ) {
                setLoadingApply(true);
                applyToJob(job_id)
                .then((res) => {
                    alertSuccess(res.data.message);
                    setLoadingApply(false);
                })
                .catch((err) => {
                    setLoadingApply(false);
                alertError(err.response.data.error);
                });
            } else {
                alert("Canceled!");
            }
        }
    };
    
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
                                <h1 className="mb-4">{job.job_title && job.job_title} </h1>

                                {(job.companyName && job.companyName) ? 
                                    <h3 className="mb-4">COMPANY: {job.companyName && job.companyName}</h3>
                                : null}

                                {(job.location && job.location) ? 
                                    <h3 className="mb-4">LOCATION: {ucWords(job.location)}</h3> 
                                : null}

                                {(job.job_industry && job.job_industry) ? 
                                    <h3 className="mb-4">INDUSTRY: {ucWords(job.job_industry)}</h3> 
                                 : null}

                                 {(job.min_salary && job.min_salary) ? 
                                    <p className="mb-4"><span className="font-weight-bold">SALARY/REMUNERATION:</span> 
                                        {""} {"NGN"} {amountWithCommas(job.min_salary)} {" - "}{amountWithCommas(job.max_salary)}
                                    </p>
                                 : null}

                                 {/* {(job.min_qualification && job.min_qualification) ? 
                                    <p className="mb-2"><span className="font-weight-bold">MINUMUM QUALIFICATION:</span> 
                                        {" "}{job.min_qualification && parse(job.min_qualification)}
                                    </p>
                                 : null} */}

                                <h2 className="mb-4">Job Requirements</h2>

                                <p>{parse(job.job_requirements && job.job_requirements)}</p>

                                {/* <a href="/" className="btn btn-warning">Apply</a> */}
                                <div>
                                    {loadingApply ? (
                                    <button
                                        disabled={true}
                                        className="btn-apply btn-warning btn-single-apply mt-4"
                                    >
                                        <Loader />
                                    </button>
                                    ) : (
                                    <button
                                        onClick={() => handleApply(job._id)}
                                        className="btn-apply btn-warning btn-single-apply mt-4"
                                    >
                                        Apply
                                    </button>
                                    )}
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-3 mt-4">
                            <div className="trending">
                                <h3>Career Development</h3>
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
                                        <h3>6 European Coutries That Do NOt Require IELTS</h3>
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
                    </> }
                </div>        
            </div>
        </section>
        <Footer />
        </>
    );
}

export default JobSingle;