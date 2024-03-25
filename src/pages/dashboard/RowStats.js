import React from "react";
import orglogo from '../../assets/img/orglogo.png'

function StatsRow({user}) {
    return (
        <div className="row dash-row">
            <div className="col-md-3 col-sm-12 col-12">
                <div className="profilebox">
                    <div className="logobox">
                        <img src={orglogo} className="" alt="logo" width={120} height={120} />
                    </div>
                    <div className="namebox">
                        <h4>{user ? `${user && user.organization?.name}` : 'loading...'}</h4>
                    </div>
                    <div className="detailbox">
                        <p>Company ID <span>999933</span></p>
                        <p>RC Number <span>RC6390</span></p>
                    </div>
                </div>
            </div>
            <div className="col-md-9 col-sm-12 col-12">
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox">
                            <h4>Total Hours Worked</h4>
                            <p>237,859</p>
                            <span>Total hours you have worked</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox">
                            <h4>Total Employees</h4>
                            <p>120</p>
                            <span>Number of employees in the organization</span>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox">
                            <h4>Work Anniversary</h4>
                            <p>March 6th</p>
                            <span>Your work anniversary</span>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox">
                            <h4>Available Positions</h4>
                            <p>6</p>
                            <span>All vacant positions</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox">
                            <h4>Upcoming Birthdays</h4>
                            <p>2</p>
                            <span>Birthdays due this month</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="dashbox bg-darkblue">
                            <h4>Next Payroll (March 31st)</h4>
                            <span>Payroll will automatically run before close of business on Wednesday, March 31st.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  StatsRow;