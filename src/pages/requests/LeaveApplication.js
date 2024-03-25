import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function LeaveApplication() {

    return (
        <>
            <div className="spur-card-menu"><Link to="/leave-apply" className="pull-right btn topbtn btn-primary">APPLY FOR LEAVE</Link></div>
            <h1 className="dash-title">Leave Requests</h1>

            <div className="row dash-row">
                <div className="col-md-12 col-sm-12 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Apply for Leave</div>
                            
                        </div>
                        <div className="card-body">
                        <form method="post" encType="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-xs-6 form-group">
                                        <label class="control-label">Year: <span>*</span></label>
                                        <input name="year" type="number" placeholder="Year" class="form-control" required />
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-6 form-group">
                                        <label class="control-label">Leave Type: <span>*</span></label>
                                        <select class="form-control form-select" name="type" id="type" required >
                                            <option value="Annual Leave">Annual Leave</option>
                                            <option value="Sick/Medical Leave">Sick/Medical Leave</option>
                                            <option value="Maternity Leave">Maternity Leave</option>
                                            <option value="Compassionate Leave">Compassionate Leave</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-6 form-group">
                                        <label class="control-label">Start Date: <span>*</span></label>
                                        <input name="start_date" type="date" placeholder="Start Date" class="form-control" required />
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-6 form-group">
                                        <label class="control-label">End Date: <span>*</span></label>
                                        <input name="end_date" type="date" placeholder="End Date" class="form-control" required />
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12 col-sm-12">
                                        <button type="submit" class="btn btn-primary" name="create_employee">SUBMIT REQUEST</button>
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
