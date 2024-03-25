import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Leave() {

    return (
        <>
            <div className="spur-card-menu"><Link to="/leave-apply" className="pull-right btn topbtn btn-primary">APPLY FOR LEAVE</Link></div>
            <h1 className="dash-title">Leave Requests</h1>

            <div className="row dash-row">
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Leave Requests</div>
                            
                        </div>
                        <div className="card-body">
                            <div className="">
                                <div className="table-responsive">
                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                        <thead><tr><th>Employee</th><th>Year</th><th>Leave Type</th><th>Start Date</th><th>End Date</th><th>Days</th>
                                        <th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            <tr>
                                                <td>Lagos Office</td>
                                                <td>2024</td>
                                                <td>LAGOFFI89</td>
                                                <td>Victoria Island</td>
                                                <td>Nigeria</td>
                                                <td><span className="badge badge-success">active</span></td>
                                                <td>TECHGUY </td>
                                                <td>
                                                    <button name='view_employee' onClick={()=> console.log('itme')} class='btn btn-review'><i class="fa fa-eye"></i> View</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
