import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Highlights from "./Highlights";
import ThreeLifestyles from "./ThreeLifestyles";
import HotelsRestaurants from "./HotelsRestaurants";

export default function Landing() {
    return (
        <div>
            <Header />
            <Highlights />
            <ThreeLifestyles />
            <HotelsRestaurants />
            <Footer />
        </div>
    );
}
