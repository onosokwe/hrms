import React, { useEffect, useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import isLoggedIn from "../../../utils/isLoggedIn";
import { alertError } from "../../../utils/alerts";
import { getCurrentUser } from "../../../utils/actions";

import Personal from "./components/Personal";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Additional from "./components/Additional";

export default function UpdateProfile(props) {
    const [activeTab, setActiveTab] = useState("one");
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const TOKEN = localStorage.getItem("kracada:token");

    useEffect(() => {
        if (!isLoggedIn()) {
            props.history.push("/account/login");
            alertError("Please login to continue");
        } else {
        getCurrentUser(TOKEN)
            .then((res) => {
                setUser(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alertError(err.response.data.error);
            });
        }
    }, [props.history, TOKEN]);

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
                               
                                <div className="col-md-3">
                                    <div className="trending">
                                        <h3>Account Profile</h3>
                                        <ul className="trending-post">
                                            <li>
                                                <a href="/account/profile">
                                                    <span className="number">1</span>   
                                                    <h3>My Profile</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/applied-jobs">
                                                    <span className="number">2</span>   
                                                    <h3>My Job Applications</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/update-profile">
                                                    <span className="number">3</span>   
                                                    <h3>Update My Profile</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/profile">
                                                    <span className="number">4</span>   
                                                    <h3>My Restaurants</h3>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" onClick={() => {
                                                    localStorage.clear();
                                                    window.location.reload();
                                                    }}
                                                    style={{display: "block"}}
                                                >
                                                    <span className="number">5</span>   
                                                    <h3>Logout</h3>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div className="col-md-9 col-sm-12">
                                    <div className="bg-white trending mt-4">
                                        <div className="row">
                                            <Tab.Container id="left-tabs-example" className="trending" defaultActiveKey="one">
                                                <div className="bg-white rounded-4 shadow-9">
                                                    <Nav
                                                        className="nav d-flex justify-content-start mb-4 border-bottom border-mercury pl-12"
                                                        role="tablist"
                                                    >
                                                        <li className="tab-menu-items" style={{border: '1px solid #ccc', minWidth: "20%"}}>
                                                            <Nav.Link
                                                                onClick={() => setActiveTab("one")}
                                                                eventKey="one"
                                                                className={`text-uppercase cursor-pointer font-size-3 font-weight-bold text-default-color py-3 px-0 ${
                                                                    activeTab === "one" ? "active" : ""
                                                                }`}
                                                            >
                                                            Personal
                                                            </Nav.Link>
                                                        </li>
                                                        <li className="tab-menu-items pr-12" style={{border: '1px solid #ccc'}}>
                                                            <Nav.Link
                                                                onClick={() => setActiveTab("two")}
                                                                eventKey="two"
                                                                className={`text-uppercase cursor-pointer font-size-3 font-weight-bold text-default-color py-3 px-0 ${
                                                                    activeTab === "two" ? "active" : ""
                                                                }`}
                                                            >
                                                            Experience
                                                            </Nav.Link>
                                                        </li>
                                                        <li className="tab-menu-items pr-12" style={{border: '1px solid #ccc'}}>
                                                            <Nav.Link
                                                                onClick={() => setActiveTab("three")}
                                                                eventKey="three"
                                                                className={`text-uppercase cursor-pointer font-size-3 font-weight-bold text-default-color py-3 px-0 ${
                                                                    activeTab === "three" ? "active" : ""
                                                                }`}
                                                            >
                                                            Skills
                                                            </Nav.Link>
                                                        </li>
                                                        <li className="tab-menu-items pr-12" style={{border: '1px solid #ccc'}}>
                                                            <Nav.Link
                                                                onClick={() => setActiveTab("four")}
                                                                eventKey="four"
                                                                className={`text-uppercase cursor-pointer font-size-3 font-weight-bold text-default-color py-3 px-0 ${
                                                                    activeTab === "four" ? "active" : ""
                                                                }`}
                                                            >
                                                            Education
                                                            </Nav.Link>
                                                        </li>
                                                        <li className="tab-menu-items pr-12" style={{border: '1px solid #ccc'}}>
                                                            <Nav.Link
                                                                onClick={() => setActiveTab("five")}
                                                                eventKey="five"
                                                                className={`text-uppercase cursor-pointer font-size-3 font-weight-bold text-default-color py-3 px-0 ${
                                                                    activeTab === "five" ? "active" : ""
                                                                }`}
                                                            >
                                                            Additional
                                                            </Nav.Link>
                                                        </li>
                                                    </Nav>

                                                    {/* <!-- Tab Content --> */}
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="one">
                                                            <Personal
                                                                data={{
                                                                    first_name: user.first_name,
                                                                    last_name: user.last_name,
                                                                    city: user.city,
                                                                    state: user.state,
                                                                    email: user.email,
                                                                    phone: user.phone,
                                                                    date_of_birth: user.date_of_birth,
                                                                    gender: user.gender,
                                                                    profile_picture: user.profile_picture,
                                                                }}
                                                            />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="two">
                                                            <Experience />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="three">
                                                            <Skills />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="four">
                                                            <Education />
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="five">
                                                            <Additional
                                                                data={{
                                                                    current_job_title: user.current_job_title,
                                                                    career_summary: user.career_summary,
                                                                    current_net_pay: user.current_net_pay,
                                                                    expected_net_pay: user.expected_net_pay,
                                                                    notice_period: user.notice_period,
                                                                    linkedin: user.linkedin,
                                                                    cv: user.cv,
                                                                }}
                                                            />
                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </div>
                                            </Tab.Container>
                                        </div>
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
