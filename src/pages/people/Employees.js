import React from "react";

export default function Employees() {
    return (
        <>
            <h1 class="dash-title">Employees </h1>

            <div className="row dash-row">
                
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Employees</div>
                            <div className="spur-card-menu">
                                <button type="button" data-toggle="modal" data-target="#modal" className="btn myybtn btn-primary">ADD EMPLOYEE</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="my_profile">
                                <div className="table-responsive">
                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                        <thead><tr><th>No</th><th>Name</th><th>Email</th><th>Phone</th><th>Designation</th><th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            <tr><td>1</td>
                                                <td>James Colton</td>
                                                <td>james@colton.com</td>
                                                <td>234 809 112 23 344</td>
                                                <td>Senior Manager</td>
                                                <td><span className="badge badge-success">Active</span></td>
                                                <td>Deactivate</td>
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
