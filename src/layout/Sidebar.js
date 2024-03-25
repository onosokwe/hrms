import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../utils/actions";
import { Link } from "react-router-dom/cjs/react-router-dom";

import logo from "../assets/img/kris-logo.png";

function Sidebar() {
    const TOKEN = localStorage.getItem("kloka:token:data");
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getLoggedInUser(TOKEN).then((res) => { setProfile(res.data.data);  }).catch((err) => { console.log(err.response) });
    }, [TOKEN]);

    const isEmployee = profile
        ? profile &&
        profile.categories &&  profile.categories.includes("EMPLOYEE")
         : false;

    // const isHRAdmin = profile
    //     ? profile &&
    //     profile.categories && profile.categories.includes("ADMIN")
    //      : false;

    return (

        <div className="dash-nav dash-nav-dark dash-nav-admin">
            <header>
                <a href="/" className="menu-toggle"><i className="fa fa-bars"></i></a>
                <a href="/" className="dash-rank"> <img src={logo} width="100" height="65" alt="logo" />
                </a>
            </header>
            {profile && isEmployee ? 
            <nav className="dash-nav-list hrcm">    
                <div className="dash-info">
                    <h3>{`${profile && profile.first_name} ${profile && profile.last_name}`}</h3>
                    <h3>Role: {profile && profile.role}</h3>
                    <h3>ID: 282030</h3>
                </div>

                <Link to="/dashboard" className="dash-nav-item"><i className="fa fa-dashboard"></i> Dashboard </Link>

                <div className="hrcm-dash-info"><h5>REQUESTS</h5></div>
                <Link to="/leave" className="dash-nav-item"><i className="fa fa-database"></i> Leave </Link>
                <Link to="/loan" className="dash-nav-item"><i className="fa fa-tasks"></i> Loans </Link>
                <Link to="/documents" className="dash-nav-item"><i className="fa fa-table"></i> Documents </Link>
                <Link to="/assets" className="dash-nav-item"><i className="fa fa-clock-o"></i> Assets </Link>
                <Link to="/exit" className="dash-nav-item"><i className="fa fa-balance-scale"></i> Exit </Link>

                <div className="hrcm-dash-info"><h5>PERFORMANCE</h5></div>
                <Link to="/kpis" className="dash-nav-item"><i className="fa fa-database"></i> KPDs and KPIs </Link>
                <Link to="/tasks" className="dash-nav-item"><i className="fa fa-tasks"></i> Tasks </Link>
                <Link to="/appraisals" className="dash-nav-item"><i className="fa fa-table"></i> Appraisals </Link>
                <Link to="/time-tracking" className="dash-nav-item"><i className="fa fa-clock-o"></i> Time Tracking </Link>
                <Link to="/disciplinary" className="dash-nav-item"><i className="fa fa-balance-scale"></i> Disciplinary </Link>

                
                <div className="hrcm-dash-info"><h5>COMPENSATION</h5></div>
                <Link to="/payroll" className="dash-nav-item"><i className="fa fa-dollar"></i> Payroll</Link>
                <Link to="/benefits" className="dash-nav-item"><i className="fa fa-cubes"></i> Benefits</Link>


                <div className="hrcm-dash-info"><h5>HIRING</h5></div>
                <Link to="/jobs" className="dash-nav-item"><i className="fa fa-dollar"></i> Job Openings</Link>
                <Link to="/talent-pool" className="dash-nav-item"><i className="fa fa-rocket"></i> Talent Pool</Link>
                <Link to="/recruitment" className="dash-nav-item"><i className="fa fa-share"></i> Recruitment</Link>


                <div className="hrcm-dash-info"><h5>EXTRAS</h5></div>
                <Link to="/help" className="dash-nav-item"><i className="fa fa-question-circle"></i> Help</Link>
                <Link to="/support" className="dash-nav-item"><i className="fa fa-support"></i> Support</Link>
                <Link to="/settings" className="dash-nav-item"><i className="fa fa-cog"></i> Settings </Link>

            </nav> : null}





        </div>
    );
}

export default Sidebar;
