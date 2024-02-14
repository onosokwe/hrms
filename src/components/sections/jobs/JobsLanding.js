import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import JobsListing from "./JobsListing";
import JobsHero from "./JobsHero";

export default function Landing() {
    return (
        <div>
            <Header />
            <JobsHero />
            <JobsListing />
            <Footer />
        </div>
    );
}
