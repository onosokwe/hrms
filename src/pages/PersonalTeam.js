import React from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";
import orglogo from '../assets/img/orglogo.png'

export default function CompanyTeams() {
    return (
        <>
            <section className="dash">
                <Sidebar />
                
                <div className="dash-app">
                    <Nav />
                    
                    <main className="dash-content">
                        <div className="container-fluid">

                            <h1 class="dash-title">Company Profile </h1>

                            <div className="row dash-row">
                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="profilebox">
                                        <div className="logobox">
                                            <img src={orglogo} className="" alt="logo" width={120} height={120} />
                                        </div>
                                        <div className="namebox">
                                            <h4>NIACOM NIGERIA LIMITED NIACOM NIGERIA LIMITED</h4>
                                        </div>
                                        <div className="detailbox">
                                            <p>Company ID <span>389933</span></p>
                                            <p>RC Number <span>RC6390</span></p>
                                            <p>Company ID <span>389933</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-6 col-12">
                                    <div className="profilebox">
                                        <div className="namebox">
                                            <h4>Billing</h4>
                                        </div>
                                        <div className="detailbox">
                                            <p>Company ID <span>389933</span></p>
                                            <p>RC Number <span>RC6390</span></p>
                                            <p>Company ID <span>389933</span></p>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-6 col-sm-6 col-12">
                                    <div className="card spur-card" style={{marginTop: 5}}>
                                        <div className="card-header">
                                            <div className="spur-card-title">Invoices</div>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="search" onkeyup="Searcher()" placeholder="Search by Name" />
                                            </div>
                                            <div className="my_profile">
                                                <div className="table-responsive">
                                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                                        <thead><tr><th>SN</th><th>Policy Number</th><th>Package</th><th>Branch Code</th><th>Passengers</th><th>Trip Duration</th><th>Created On</th><th>Created By</th></tr></thead>
                                                        <tbody>
                                                            <tr><td>1</td>
                                                                <td>100006FAMI13</td>
                                                                <td>FAMI13</td>
                                                                <td>SWAK</td>
                                                                <td>6</td>
                                                                <td>3 days</td>
                                                                <td>27/09/2023</td>
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
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}
