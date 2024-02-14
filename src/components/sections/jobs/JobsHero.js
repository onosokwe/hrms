import React from "react";
import HeroSearch from "./HeroSearch";

function JobsHero() {
    return (
        <section className="main_hero">
            <div className="row">
                <div className="col-md-12">
                    <div className="text-center">
                        <div className="hero_main">
                            <h1>Discover new job and <br /> career opportunities!</h1>
                        </div>
                        <HeroSearch />
                    </div>
                </div> 
            </div>
        </section> 
    );
}


export default  JobsHero;