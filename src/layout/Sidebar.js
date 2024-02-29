import React from "react";
import logo from "../assets/img/kris-logo.png";

function Sidebar() {

    return (

        <div className="dash-nav dash-nav-dark dash-nav-admin">
            <header>
                <a href="/" className="menu-toggle"><i className="fa fa-bars"></i></a>
                <a href="/" className="dash-rank"> <img src={logo} width="100" height="65" alt="logo" />
                </a>
            </header>
            <nav className="dash-nav-list hrcm">
                
                <a href="/dashboard" className="dash-nav-item"><i className="fa fa-dashboard"></i> Dashboard </a>
                <a href="/onboarding" className="dash-nav-item"><i className="fa fa-table"></i> Onboarding </a>
                <div className="dash-nav-dropdown">
                    <a type="button" href='#' className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fa fa-institution"></i> Organization</a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="/company-profile" className="dash-nav-dropdown-item">Company Profile</a>
                        <a href="/company-departments" className="dash-nav-dropdown-item">Departments</a>
                        <a href="/company-branches" className="dash-nav-dropdown-item">Branches</a>
                        <a href="/company-chart" className="dash-nav-dropdown-item">Organization Chat</a>
                    </div>
                </div>

                <div className="hrcm-dash-info"><h5>PEOPLE</h5></div>
                <div className="dash-nav-dropdown">
                    <a type="button"  href='#' className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fa fa-user"></i> People</a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="/employees" className="dash-nav-dropdown-item">Employees</a>
                        <a href="/reports" className="dash-nav-dropdown-item">Reports</a>
                    </div>
                </div>
                <div className="dash-nav-dropdown">
                    <a type="button"  href='#' className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fa fa-retweet"></i> Requests</a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="/leavve" className="dash-nav-dropdown-item">Leave</a>
                        <a href="/exit" className="dash-nav-dropdown-item">Exit</a>
                        <a href="/loan" className="dash-nav-dropdown-item">Loan</a>
                        <a href="/documents" className="dash-nav-dropdown-item">Documents</a>
                    </div>
                </div>

                <div className="hrcm-dash-info"><h5>PRODUCTIVITY</h5></div>
                <a href="/tasks" className="dash-nav-item"><i className="fa fa-tasks"></i> Tasks </a>
                <div className="dash-nav-dropdown">
                    <a type="button"  href='#' className="dash-nav-item dash-nav-dropdown-toggle">
                        <i className="fa fa-database"></i> Performance</a>
                    <div className="dash-nav-dropdown-menu">
                        <a href="/employees" className="dash-nav-dropdown-item">KPDs and KPIs</a>
                        <a href="/appraisals" className="dash-nav-dropdown-item">Appraisals</a>
                    </div>
                </div>
                <a href="/time-tracking" className="dash-nav-item"><i className="fa fa-clock-o"></i> Time Tracking </a>
                <a href="/disciplinary" className="dash-nav-item"><i className="fa fa-balance-scale"></i> Disciplinary </a>

                
                <div className="hrcm-dash-info"><h5>COMPENSATION</h5></div>
                <a href="/payroll" className="dash-nav-item"><i className="fa fa-dollar"></i> Payroll</a>
                <a href="/benefits" className="dash-nav-item"><i className="fa fa-cubes"></i> Benefits</a>


                <div className="hrcm-dash-info"><h5>HIRING</h5></div>
                <a href="/jobs" className="dash-nav-item"><i className="fa fa-dollar"></i> Job Openings</a>
                <a href="/talent-pool" className="dash-nav-item"><i className="fa fa-rocket"></i> Talent Pool</a>
                <a href="/recruitment" className="dash-nav-item"><i className="fa fa-share"></i> Recruitment</a>


                <div className="hrcm-dash-info"><h5>EXTRAS</h5></div>
                <a href="/help" className="dash-nav-item"><i className="fa fa-question-circle"></i> Help</a>
                <a href="/support" className="dash-nav-item"><i className="fa fa-support"></i> Support</a>
                <a href="/settings" className="dash-nav-item"><i className="fa fa-cog"></i> Settings </a>

            </nav>
        </div>
    );
}

export default Sidebar;
