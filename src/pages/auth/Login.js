import React, { useEffect, useState } from "react";
import isLoggedIn from "../../utils/isLoggedIn";
import { userLogin } from "../../utils/actions";
import { alertSuccess, alertError } from "../../utils/alerts";

export default function Login(props) {
    const [loading, setLoading] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    // const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        isLoggedIn() && props.history.push("/dashboard");
    }, [props]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        
        if(data.email && data.password){
            setLoading(true);
            userLogin(data)
                .then((res) => {
                    if(res.data.success){
                        console.log(res.data)
                        localStorage.setItem("kloka:token:data", res.data.token);
                        localStorage.setItem("kloka:role", res.data.user.role); 
                        localStorage.setItem("kloka:type", res.data.user.type);            
                        alertSuccess("Login Successful.");
                        setLoading(false);
                        props.history.push("/dashboard");
                        window.location.reload();
                    }
              })
              .catch((error) => {
                console.log(error)
                    setLoading(false);
                    alertError(error.response.data.error);
              });
        }
    };

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <>      
            <section className="quotes" style={{padding:20, marginTop: 50}}>
                <div className="container">
                    
                    <div className="account">
                        <h2 className="font-weight-bold" style={{marginBottom:0}}>Login</h2>
                        <form method="post" onSubmit={handleSubmit} >
                            <p className="font-weight-bold text-danger"> </p>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Email</label>
                                    <input type="email" name="email" required placeholder="Email" id="email" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Password</label>
                                    <div className="pass-wrapper">
                                        <input 
                                            type={passwordShown ? "text" : "password"} 
                                            name="pass" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Your Password" 
                                            required 
                                        />
                                        <span onClick={togglePasswordVisiblity}>
                                            {passwordShown ? (
                                                <i className="fas fa-eye-slash" aria-hidden="true"></i>
                                            ) : (
                                                <i className="fas fa-eye" aria-hidden="true"></i>
                                            )}
                                        </span>
                                    </div> 
                                </div>
                                <div className="col-md-12">
                                    <button type="submit"  className="btn btn-primary" 
                                        disabled={loading ? true : false}>
                                        {!loading ? "Login" : <i className="fa fa-spinner fa-spin"></i>}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="form_links">
                            <p>Forgot your Password? <a href="/forgot-password">Reset it</a></p>
                        </div>
                    </div>
                    <p className="text-center mt-3" style={{fontSize:10,marginBottom:3,color:'#888594'}}>© 2024. <b>ERP</b>
                    <br /> Powered by Kimberly Ryan Limited</p>
                </div>
            </section>
           
        </>
    );
}
