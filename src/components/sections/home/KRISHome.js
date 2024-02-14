import React, { useEffect, useState } from "react";
import isLoggedIn from "../../../utils/isLoggedIn";
import { userLogin } from "../../../utils/actions";
import { alertSuccess, alertError } from "../../../utils/alerts";

export default function KRIS_Login(props) {
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
                <section className="login quotes" style={{padding:20}}>
                    <div className="container">
                        <h1 className="font-weight-bold">
                            <a href="/" style={{color: "#2e3192", textDecoration:"none"}}>
                                <img style={{height:60, display:"inline-block"}} alt="test" /> 
                            </a>
                        </h1>
                        <div className="account">
                            <h2 className="font-weight-bold" style={{marginBottom: 5}}>Login</h2>
                            <form onSubmit={handleSubmit} className="php-email-form">
                                <p className="font-weight-bold text-danger"></p>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label for="email">Email</label>
                                        <input type="email" name="email" required placeholder="Email" id="email" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label for="password">Password</label>
                                        <input type="password" name="pass" required placeholder="Password" id="password" className="form-control" />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="submit" name="login" className="btn" value="Login" />
                                    </div>
                                </div>
                            </form>
                            <div className="form_links">
                                <p >Forgot your Password? <a href="/recover">Reset it</a></p>
                                <p>Not registered yet? <a href="/signup">Register now</a></p>
                                <span></span>
                                <p style={{marginBottom:0, paddingBottom:0}}>
                                    Manage your workforce from anywhere, at any time.
                                </p>
                            </div>
                        </div>
                        <p className="text-center mt-3" style={{fontSize:10, marginBottom:3, color:"#888594"}}>
                            © 2024. <b>Human Resource Integrated Solution </b><br /> Powered by Kimberly Ryan Limited
                        </p>
                    </div>
                </section>
        </>
    );
}
