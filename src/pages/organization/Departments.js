import React from "react";

export default function Departments() {
    return (
        <>
            <h1 class="dash-title">Company Departments </h1>

            <div className="row dash-row">
                
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Departments</div>
                            <div className="spur-card-menu">
                                <button type="button" data-toggle="modal" data-target="#modal" className="btn myybtn btn-primary">ADD DEPARTMENT</button>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="my_profile">
                                <div className="table-responsive">
                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                        <thead><tr><th>No</th><th>Date</th><th>Description</th><th>Method</th><th>Total</th><th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            <tr><td>1</td>
                                                <td>27/09/2023</td>
                                                <td>Domain name renewal</td>
                                                <td>Paypal</td>
                                                <td>$5.90</td>
                                                <td><span className="badge badge-success">paid</span></td>
                                                <td>TECHGUY </td>
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
