import React from "react";

export default function Branches() {

    return (
        <>
            
            <h1 className="dash-title">Company Branches </h1>

            <div className="row dash-row">
                
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Branches</div>
                            <div className="spur-card-menu"><button type="button" data-toggle="modal" data-target="#modal" className="btn myybtn btn-primary">ADD BRANCH</button></div>
                        </div>
                        <div className="card-body">
                            <div className="my_profile">
                                <div className="table-responsive">
                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                        <thead><tr><th>No</th><th>Branch Name</th><th>Branch Code</th><th>City</th><th>Country</th>
                                        <th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            <tr><td>1</td>
                                                <td>Lagos Office</td>
                                                <td>LAGOFFI89</td>
                                                <td>Victoria Island</td>
                                                <td>Nigeria</td>
                                                <td><span className="badge badge-success">active</span></td>
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


            <div id="modal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">CREATE BRANCH</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form method="post" action="" enctype="multipart/form-data">
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label className="control-label">Branch Name <span>*</span></label>
                                        <input type="text" name="name" className="form-control" required placeholder="Enter Branch Name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label className="control-label">Branch Code <span>*</span></label>
                                        <input type="text" name="code" className="form-control" required placeholder="Enter Branch Code"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label className="control-label">Branch Address <span>*</span></label>
                                        <input type="text" name="address" className="form-control" required placeholder="Enter Branch Address"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label className="control-label">City <span>*</span></label>
                                        <input type="text" name="city" className="form-control" required placeholder="Enter City"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <button type="submit" name="add_branch" className="btn">Create Branch</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            
        </>
    );
}
