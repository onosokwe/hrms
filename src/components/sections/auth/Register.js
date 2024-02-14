import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { userSignup } from "../../../utils/actions";
import isLoggedIn from "../../../utils/isLoggedIn";
import { alertSuccess, alertError } from "../../../utils/alerts";

export default function Register(props) {
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        isLoggedIn() && props.history.push("/");
    }, [props]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };


        if (data.password.length < 6) {
            setPasswordError(true);
            return;
        }
        setLoading(true);
        userSignup(data)
        .then((res) => {
            alertSuccess(res.data.message);
            setLoading(false);
            props.history.push("/account/login");
        })
        .catch((error) => {
            alertError(error.response.data.error);
            setLoading(false);
        });
        setTimeout(() => {
            setLoading(false)
        }, 4500);
    };
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <>
            <Header />
                <main id="main">
                    <section id="contact" className="contact mb-5">
                        <div className="container" data-aos="fade-up">

                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <h1 className="page-title">Create an Account</h1>
                                </div>
                            </div>


                            <div className="form mt-5" style={{maxWidth: 750, margin: 'auto', marginTop: 100 }}>
                                <form className="php-email-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="first_name" className="form-control" id="fname" placeholder="First Name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="text" name="last_name" className="form-control" id="lname" placeholder="Last Name" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="pass-wrapper">
                                                <input 
                                                    type={passwordShown ? "text" : "password"} 
                                                    name="password" 
                                                    className="form-control" 
                                                    id="password" 
                                                    placeholder="Password" 
                                                    required 
                                                />
                                                <span onClick={togglePasswordVisiblity}>
                                                    {passwordShown ? (
                                                        <i className="fas fa-eye-slash" aria-hidden="true"></i>
                                                    ) : (
                                                        <i className="fas fa-eye" aria-hidden="true"></i>
                                                    )}
                                                    </span>
                                                {passwordError && (
                                                    <small className="text-danger">
                                                        Password must be at least 6 characters
                                                    </small>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="form-group">
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary" 
                                                disabled={loading ? true : false}>
                                                {!loading ? "Create Account" : <i className="fa fa-spinner fa-spin"></i>}
                                            </button>

                                            <p className="text-left mt-3"> Already have an account? Please{" "}
                                            <a href="/account/login" className="text-primary">
                                                Login
                                            </a>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </main>

            <Footer />
        </>
    );
}
