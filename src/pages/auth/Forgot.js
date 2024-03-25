import React, { useEffect, useState } from "react";
import isLoggedIn from "../../utils/isLoggedIn";
import { userLogin } from "../../utils/actions";
import { alertSuccess, alertError } from "../../utils/alerts";

export default function ForgotPassword(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        isLoggedIn() && props.history.push("/dashboard");
    }, [props]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            email: e.target.email.value,
        };
        
        if(data.email){
            userLogin(data)
                .then((res) => {
                    if(res.data.success){
                        localStorage.setItem("kloka:token:data", res.data.token);
                        localStorage.setItem("kloka:role", res.data.user.role); 
                        localStorage.setItem("kloka:type", res.data.user.type);            
                        alertSuccess("Login Successful.");
                        setLoading(false);
                        props.history.push("/dashboard");
                    }
              })
              .catch((error) => {
                    setLoading(false);
                    alertError(error.response.data.error);
              });
        }
    };

    return (
        <>      
            <section className="quotes" style={{padding:20, marginTop: 50}}>
                <div className="container">
                    
                    <div className="account">
                        <h2 className="font-weight-bold">Recover Your Password</h2>
                        <form method="post" onSubmit={handleSubmit} >
                            <p className="font-weight-bold text-danger"> </p>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Enter your Email</label>
                                    <input type="email" name="email" required placeholder="Enter your Email" id="email" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <button type="submit"  className="btn btn-primary" 
                                        disabled={loading ? true : false}>
                                        {!loading ? "Submit" : <i className="fa fa-spinner fa-spin"></i>}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="form_links">
                            <p>Have your login details? <a href="/">Login here</a></p>
                        </div>
                    </div>
                    <p className="text-center mt-3" style={{fontSize:10,marginBottom:3,color:'#888594'}}>© 2024. <b>ERP</b>
                    <br /> Powered by Kimberly Ryan Limited</p>
                </div>
            </section>
        </>
    );
}
