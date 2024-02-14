import React from "react";

function HomeHero() {
    return (
        <section className="main_hero">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <div className="hero_main">
                            <h1>Everything you need <br />in one place!</h1>
                            <div className="hero_btns">
                                <a href="/jobs" className="btn btn-jobs mr-3">Jobs</a>
                                <a href="/career" className="btn btn-careers mr-3">Career</a>
                                <a href="/news" className="btn btn-news mr-3">News</a>
                                <a href="/lifestyle" className="btn btn-lifestyle">Lifestyle</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section> 
    );
}

export default  HomeHero;