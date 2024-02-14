import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";

export default function WorkLife() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }); 

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
                                    <h3 className="category-title">Work Life</h3>

                                    

                                </div> 

                                <div className="col-md-3">
                                    <div className="trending">
                                        <h3>Oversea Education</h3>
                                        <ul className="trending-post">
                                            <li>
                                            <a href="/work-life">
                                                <span className="number">1</span>   
                                                <h3>Top Ten Tips on Gaining Admission to Ivy League Univerities</h3>
                                                <span className="author">Kimberly Ryan</span>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="/work-life">
                                                <span className="number">2</span>
                                                <h3>6 European Coutries That Do NOt Require IELTS</h3>
                                                <span className="author">Wade Warren</span>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="/work-life">
                                                <span className="number">3</span>
                                                <h3>These 9 Univerities Have Waived Application Fee For Nigerians</h3>
                                                <span className="author">Esther Howard</span>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="/work-life">
                                                <span className="number">4</span>
                                                <h3>9 Tips on How To Relocate With Your Family To The United Kingdom</h3>
                                                <span className="author">Cameron Williamson</span>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="/work-life">
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
                </main>
            )}
            <Footer />
        </div>
    );
}
