import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Sliders from "./Slider";
import NowShowing from "./NowShowing";

export default function FilmHouseLanding() {
    return (
        <div>
            <Header />
            <Sliders />
            <NowShowing />
            <Footer />
        </div>
    );
}
