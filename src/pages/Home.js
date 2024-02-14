import React from "react";
import Sidebar from "../layout/Sidebar";
import Nav from "../layout/Nav";

export default function KRIS_Dashboard() {
    return (
        <>
            <section className="dash">
                <Sidebar />
                
                <div className="dash-app">
                    <Nav />
                    
                    <main className="dash-content">
                        <div className="container-fluid">
                            
                            <div className="row dash-row">

                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="dashbox">
                                        <h4>Total Employees</h4>
                                        <p>120</p>
                                        <span>Number of your employees</span>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="dashbox">
                                        <h4>Total Salary (this month)</h4>
                                        <p>₦72,980,000</p>
                                        <span>Total earned wages by your employees</span>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="dashbox">
                                        <h4>Available Positions</h4>
                                        <p>6</p>
                                        <span>All vacant positions</span>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="dashbox">
                                        <h4>Total Hours Worked</h4>
                                        <p>237,859</p>
                                        <span>All employees hours worked</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="row">
                                <div className="col-md-9">
                                    <div className="card spur-card same-height">
                                        <div className="card-header">
                                            <div className="spur-card-icon"><i className="fa fa-bars"></i></div>
                                            <div className="spur-card-title"> Recent Payroll History </div>
                                        </div>
                                        <div className="card-body spur-card-body-chart">
                                            <canvas id="spurChartjsBar"></canvas>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="dashbox bg-darkblue">
                                        <h4>Next Payroll (January 31st)</h4>
                                        <span>Payroll will automatically run before close of business on Wednesday, January 31st.</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}
