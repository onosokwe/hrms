import React, { useEffect, useState } from "react";
import isLoggedIn from "../../../utils/isLoggedIn";
import { userLogin } from "../../../utils/actions";
import { alertSuccess, alertError } from "../../../utils/alerts";
import Header from "../../Header";
import Footer from "../../Footer";

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    // const [passwordShown, setPasswordShown] = useState(false);
    // const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        isLoggedIn() && props.history.push("/account/profile");
    }, [props]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
    
        setLoading(true);
        userLogin(data)
            .then((res) => {
                setLoading(false);
                localStorage.setItem("kracada:token", res.data.token);
                localStorage.setItem("kracada:fname", res.data.user.first_name);
                localStorage.setItem("kracada:lname", res.data.user.last_name);
                alertSuccess("Login Successful.");
                props.history.push("/account/profile");
          })
          .catch((error) => {
                setLoading(false);
                alertError(error.response.data.error);
          });
    };
      
    return (
        <>
            {/* <Header /> */}
                <main id="main">
                    <section id="contact" className="contact mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <h1 className="page-title">Login</h1>
                                </div>
                            </div>

                            <div className="form" style={{width: 500, marginRight: 'auto', marginLeft: 'auto',}}>
                                <form onSubmit={handleSubmit} className="php-email-form">
                                    <div className="row">
                                    
                                        <div className="form-group col-md-12">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="password" name="password" className="form-control" id="password" placeholder="Your Password" required />
                                        </div>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit"  className="btn btn-primary" 
                                            disabled={loading ? true : false}>
                                            {!loading ? "Login" : <i className="fa fa-spinner fa-spin"></i>}
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>

                </main>

            {/* <Footer /> */}
        </>
    );
}
