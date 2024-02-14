import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import CareerHero from './CareerHero';
import CareerBlog from "./CareerBlog";


export default function CareerLanding() {
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
                    <CareerHero />
                    <section  id="posts" className="posts light-hero" style={{borderTop: "1px solid #ccc"}}>
                        <div className="container">
                            <div className="row g-5">
                                <CareerBlog />
                            </div>         
                        </div>
                    </section>
                </main>
            )}
            <Footer />
        </div>
    );
}
