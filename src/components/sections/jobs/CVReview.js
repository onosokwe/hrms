import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function CvReview() {

    return (
        <div>
            <Header />
            <main id="main">
                <section id="search-result" className="search-result cv-review">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="">
                                    <h1 className="category-title">Kracada CV Review</h1>
                                    <p className="category-subtitle">Increase your chances of success at Interviews.</p>
                                </div>
                            </div> 

                            <div className="col-md-4">
                                <div className="cv-circle">
                                    <i className="bi bi-person-plus-fill fa-4x"></i>
                                </div>
                                <h2>Step 1: Create an account</h2>
                                <p>Create an account, and tell us a little bit about yourself.</p>
                            </div>

                            <div className="col-md-4">
                                <div className="cv-circle">
                                    <i className="bi bi-file-text-fill fa-4x"></i>
                                </div>
                                <h2>Step 2: Submit Your CV</h2>
                                <p>Choose from the available packages and submit your CV for review.</p>
                            </div>

                            <div className="col-md-4">
                                <div className="cv-circle">
                                    <i className="bi bi-credit-card fa-4x"></i>
                                </div>
                                <h2>Step 3: Make Payment</h2>
                                <p>Make payment for your CV review based on the chosen package.</p>
                            </div> 
                        </div>        
                    </div>
                </section>

                <section className="search-result cv-packages">
                    <div className="container">
                        <div className="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cv-package deluxe">
                                        <h2>Deluxe Package </h2>
                                        <h5>N 45,000</h5>
                                        <p>Cover Letter Not Included</p>
                                        <h4>What is Included:</h4>
                                        <p><strong>Professional CV Written (Nigerian Standard).</strong><br/> We will style your CV to Nigerian Standard acceptable to most organizations and firms.</p>
                                        <p><strong>Up To Four Revisions.</strong><br/> You can give us feedback on each draft and we will make revisions up to a maximum of four times. </p>
                                        <p className="noBd"><strong>Turn around time.</strong><br/> The first draft of your CV will be sent to you within 3 working days. </p>

                                        <a href="/account/login" className="btn btn-block btn-deluxe">Choose this Package</a>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="cv-package">
                                        <h2>Supreme Package</h2>
                                        <h5>N 55,000</h5>
                                        <p>Cover Letter Included</p>
                                        <h4>What is Included:</h4>
                                        <p><strong>Professional CV Written (International Standard).</strong><br/> We will style your CV to International Standard acceptable to most organizations and firms in any country of your choice.</p>
                                        <p><strong>Up To Seven Revisions.</strong><br/> You can give us feedback on each draft and we will make revisions up to a maximum of seven times. </p>
                                        <p className="noBd"><strong>Turn around time.</strong><br/> The first draft of your CV will be sent to you within 5 working days. </p>

                                        <a href="/account/login" className="btn btn-block">Choose this Package</a>
                                    </div>
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
            <Footer />
        </div>
    );
}
