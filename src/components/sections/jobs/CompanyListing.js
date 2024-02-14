import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import { getAllEmployers } from "../../../utils/actions";

export default function CompanyListing() {
    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getAllEmployers()
            .then((res) => {
                setCompanies(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            })
    }, []); 

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
                                <div className="col-md-9">
                                    <h3 className="category-title">Company Listing</h3>
                                    
                                    {companies && companies.map((company, i) => (
                                        <a href="/" key={i}>
                                            <div className="d-md-flex post-entry-2 small-img jobs-card">
                                                <div>
                                                    <h3>{company.company_name}</h3>
                                                    <div className="post-meta">{company.email} </div>
                                                    <p>{company.phone} </p>
                                                </div>
                                            </div>
                                        </a>
                                    ))}

                                </div> 

                                <div className="col-md-3">
                                    
                                    <div className="trending">
                                        <h3>Job Search Advice</h3>
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
                            </div>        
                        </div>
                    </section>

                    <section className="search-result stay-updated">
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
            )}
            <Footer />
        </div>
    );
}
