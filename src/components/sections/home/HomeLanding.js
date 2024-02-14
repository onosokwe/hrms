import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

import HomeFeaturedJobs from "./FeaturedJobs";
import HomeTrendingNews from "./TrendingNews";
import HomeRestaurants from "./HomeRestaurants";
import ThreeHighlights from "./ThreeHighlights";

export default function HomeLanding() {
    return (
        <>
            <Header />
            <HomeTrendingNews />
            <ThreeHighlights />
            <HomeRestaurants />
            <HomeFeaturedJobs />
            <Footer />
        </>
    );
}
