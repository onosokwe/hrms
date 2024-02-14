import React from "react";

function StatsRow() {
    return (
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
    );
}

export default  StatsRow;