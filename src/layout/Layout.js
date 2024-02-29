import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

const Layout = ({children}) => {
    return (
        <>
            <section className="dash">
                <Sidebar /> 
                <div className="dash-app">
                    <Nav />
                    <main className="dash-content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default Layout;
