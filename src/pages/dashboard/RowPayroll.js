import React from "react";


function RowPayroll() {
    return (
        <div className="row">
            <div className="col-md-12">
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
            
        </div>
    )
}

export default RowPayroll;
