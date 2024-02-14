import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import isLoggedIn from "../../../utils/isLoggedIn";
import { alertError } from "../../../utils/alerts";
import { getCurrentUser } from "../../../utils/actions";
import amountWithCommas from "../../../utils/amountFormmater";
// import useravatar from "../../../assets/img/useravatar.png";

export default function Profile(props) {
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
      }, [TOKEN, props.history]);

      console.log(user)

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

                                <div className="col-md-9">
                                    <div className="bg-white trending">
                                        <div className="row">
                                            <div className="col-12 col-xl-12 col-lg-12 col-md-12 order-2 order-lg-1">
                                                
                                                <div className="pr-xl-0 pr-xxl-14 p-4 mobile-padding">
                                                    <h4 className="font-size-6 font-weight-semibold mb-6 text-black-2">
                                                        <u> Personal Information</u>
                                                    </h4>

                                                    <div className="row">
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">First Name: </p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {user.first_name ? user.first_name : "NA"}
                                                            </h5>
                                                        </div>
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">Last Name</p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {user.last_name ? user.last_name : "NA"}
                                                            </h5>
                                                        </div>
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">Email</p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {user.email ? user.email : "NA"}
                                                            </h5>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">Phone</p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {(user.phone && user.phone) ? user.phone : "NA"}
                                                            </h5>
                                                        </div>
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">Location</p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {user.city && user.city} {" "} {user.state && user.state}
                                                            </h5>
                                                        </div>
                                                        <div className="col-md-4 mb-4">
                                                            <p className="font-size-4 mb-0">Date of Birth</p>
                                                            <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                                {user.date_of_birth ? new Date(user.date_of_birth).toDateString() : "NA"}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="border-top border-mercury pr-xl-8 pr-xxl-8 mobile-padding p-5 px-xs-12 pt-7 pb-5" 
                                                style={{backgroundColor: "#f0f0f0"}}>
                                                    <h4 className="font-size-6 font-weight-semibold mb-6 text-black-2">
                                                        <u>Career Summary</u>
                                                    </h4>
                                                    <p className="font-size-4 text-justify mb-8">
                                                        {user.career_summary && user.career_summary}
                                                    </p>
                                                </div>


                                                <div className="border-top mobile-padding border-mercury pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5" >
                                                    <h4 className="font-size-6 font-weight-semibold mb-4 text-black-2">
                                                    <u>Professional Skills</u>
                                                    </h4>
                                                    <ul className="list-unstyled d-flex align-items-center flex-wrap">
                                                    {user.skils && user.skills.map((skill, i) => (
                                                        <li key={i} className="mr-3">
                                                            <a className="bg-polar text-black-2 mr-6 padding-thin mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center" href="/">
                                                            {skill}
                                                            </a>
                                                        </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="border-top mobile-padding border-mercury p-5 pl-xs-12 pt-7 pb-5" 
                                                style={{backgroundColor: "#f0f0f0"}}>
                                                    <h4 className="font-size-6 font-weight-semibold mb-4 text-black-2">
                                                        <u> Work Exprerience </u>
                                                    </h4>
                                                    {user.experiences && user.experiences.map((exp) => (
                                                        <div key={exp._id} className="w-100 mt-4">
                                                        <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                                                            <div className="w-100">
                                                            <h3 className="mb-0 d-flex justify-content-between">
                                                                <a className="font-size-5 font-weight-semibold text-black-2"  href="/">
                                                                {exp.job_title}
                                                                </a>
                                                                <span className="font-size-2 font-weight-normal">
                                                                <small>
                                                                    {new Date(
                                                                    exp.start_date
                                                                    ).toLocaleDateString()}{" "}
                                                                    -{" "}
                                                                    {new Date(
                                                                    exp.end_date
                                                                    ).toLocaleDateString()}{" "}
                                                                </small>
                                                                </span>
                                                            </h3>
                                                            <a className="font-size-6 text-default-color line-height-2" href="/">
                                                                {exp.company} | {exp.location}
                                                            </a>
                                                            {exp.job_duties && exp.job_duties.length > 0 ? 
                                                                <>
                                                                    <h6 className="mt-4">
                                                                        Responsibilities/Achievments
                                                                    </h6>
                                                                    <ul>
                                                                        {exp.job_duties && exp.job_duties.map((val) => (
                                                                        <li key={val} className="mt-4">
                                                                            {val}
                                                                        </li>
                                                                        ))}
                                                                    </ul>
                                                                </> 
                                                            : null}
                                                            </div>
                                                        </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="border-top mobile-padding border-mercury p-5 pl-xs-12 pt-7 pb-5">
                                                    <h4 className="font-size-6 font-weight-semibold mb-7 mb-4 text-black-2">
                                                    <u> Education</u>
                                                    </h4>
                                                    {user.education &&
                                                    user.education.map((edu) => (
                                                        <div key={edu._id} className="w-100">
                                                        <div className="d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap">
                                                            <div className="w-100 mt-n2">
                                                            <h3 className="mb-0 text-capitalize">
                                                                <a className="font-size-5 font-weight-semibold text-black-2" href="/">
                                                                {edu.qualification}, {edu.degree_obtained}
                                                                </a>
                                                            </h3>
                                                            <a className="font-size-4 text-default-color line-height-2" href="/">
                                                                {edu.institution}
                                                            </a>
                                                            <div className="d-flex align-items-center justify-content-md-between flex-wrap">
                                                                <a className="font-size-3 text-black-2" href="/">
                                                                Class of Degree/GPA -{" "}
                                                                <strong>{edu.class_of_degree}</strong>
                                                                </a>
                                                                <a className="font-size-3 text-black-2" href="/">
                                                                Graduated -{" "}
                                                                <strong>
                                                                    {" "}
                                                                    {new Date(edu.grad_year).toDateString()}
                                                                </strong>
                                                                </a>
                                                                <a className="font-size-3 text-black-2" href="/">
                                                                <span
                                                                    className="mr-4"
                                                                    css={`
                                                                    margin-top: -2px;
                                                                    `}
                                                                >
                                                                    <i className="fa fa-map-marker-alt"></i>
                                                                </span>
                                                                <strong> {edu.location}</strong>
                                                                </a>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="border-top mobile-padding border-mercury p-5 pl-xs-12 pt-7 pb-5">
                                                    <h4 className="font-size-6 font-weight-semibold mb-4 text-black-2">
                                                    <u> Additional Info </u>
                                                    </h4>
                                                    {/* <!-- Single Card --> */}
                                                    <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div>
                                                        <p className="font-size-4 mb-0">
                                                            Current net pay per month:
                                                        </p>
                                                        <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                            &#8358;
                                                            {user.current_net_pay &&
                                                            amountWithCommas(user.current_net_pay)}
                                                        </h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-7">
                                                        <p className="font-size-4 mb-0">
                                                            Expected net pay per month:
                                                        </p>
                                                        <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                            &#8358;
                                                            {user.expected_net_pay &&
                                                            amountWithCommas(user.expected_net_pay)}
                                                        </h5>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div>
                                                        <p className="font-size-4 mb-0">Notice period:</p>
                                                        <h5 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                            {user.notice_period &&
                                                            user.notice_period === "7"
                                                            ? "One Week"
                                                            : user.notice_period === "14"
                                                            ? "Two Weeks"
                                                            : user.notice_period === "21"
                                                            ? "Three Weeks"
                                                            : user.notice_period === "30"
                                                            ? "One Month"
                                                            : "Others"}
                                                        </h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-7">
                                                        <p className="font-size-4 mb-0">LinkedIn:</p>
                                                        <h6 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                            <a
                                                            href={user.linkedin && user.linkedin}
                                                            className="text-primary"
                                                            >
                                                            <i className="fa fa-linkedin-square text-primary"></i>{" "}
                                                            <u> {user.linkedin && user.linkedin}</u>
                                                            </a>
                                                        </h6>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="mb-7">
                                                        <p className="font-size-4 mb-0">Uploaded CV:</p>
                                                        {user.cv && (
                                                            <h6 className="font-size-4 font-weight-semibold mb-0 text-black-2 text-break">
                                                            <a href={user.cv} className="text-primary">
                                                                <u>Download</u>
                                                            </a>
                                                            </h6>
                                                        )}
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                </div>
                                            </div>
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
