import React from "react";

function RowPayroll() {
    return (
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
    )
}

export default RowPayroll;
