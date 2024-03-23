import React from "react";

export default function Login() {
    return (
        <>      
            <section className="login quotes" style={{padding:20, marginTop: 50}}>
                <div className="container">
                    
                    <div className="account">
                        <h2 className="font-weight-bold" style={{marginBottom:0}}>Login</h2>
                        <form method="post" onSubmit={()=> { console.log('jjkl')}}>
                            <p className="font-weight-bold text-danger"> </p>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Email</label>
                                    <input type="email" name="email" required placeholder="Email" id="email" className="form-control" />
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Password</label>
                                    <input type="password" name="pass" required placeholder="Password" id="password" className="form-control" />
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" name="login" className="btn" value="Login" />
                                </div>
                            </div>
                        </form>
                        <div className="form_links">
                            <p>Forgot your Password? <a href="/recover">Reset it</a></p>
                            <p>Not registered yet? <a href="/signup">Register now</a></p>
                            <span></span>
                        <p style={{marginBottom:0, paddingBottom:0}}>We have designed several plans to meet your needs.</p>
                        </div>
                    </div>
                    <p className="text-center mt-3" style={{fontSize:10,marginBottom:3,color:'#888594'}}>© 2024. <b>Human Manager. </b>
                    <br /> Powered by Company Limited</p>
                </div>
            </section>
           
        </>
    );
}
