import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import AllNews from "./AllNews";
import Loader from "../../../utils/Loader";
import { getTopSectionNews } from "../../../utils/actions";

export default function Landing() {
    const [loading, setLoading] = useState(true);
    const [technology, setTechnology] = useState([]);
    const [nigerian, setNigerian] = useState([]);
    const [international, setInternational] = useState([]);
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        getTopSectionNews()
            .then((res) => {
                setTechnology(res.data.technology);
                setNigerian(res.data.nigerian);
                setInternational(res.data.international);
                setBusiness(res.data.business);

                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            });
    }, []); 

    return (
        <div>
            <Header />
            {loading ? (
                <Loader />
            ) : (
                <>
                    
                <AllNews 
                    data={{
                        business,
                        nigerian,
                        technology,
                        international,
                    }}
                />
            
                </>
            )}
            <Footer />
        </div>
    );
}
