import React, { useEffect, useState } from "react";
import orglogo from '../../assets/img/orglogo.png'
import { getLoggedInUser } from "../../utils/actions";
import Loader from "../../utils/Loader";
import { alertError } from "../../utils/alerts";


export default function CompanyProfile(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const TOKEN = localStorage.getItem("kloka:token:data");

    useEffect(() => {
         getLoggedInUser(TOKEN)
            .then((res) => {
                setUser(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alertError(err.response.data.error);
            });
        
      }, [TOKEN, props.history]);
      
    console.log(loading)

    return (
        <>
            
            <h1 class="dash-title">Company Profile </h1>

            <div className="row dash-row">
            {loading ? (
                <Loader />
            ) : (
                <>
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="profilebox">
                        <div className="logobox">
                            <img src={orglogo} className="" alt="logo" width={120} height={120} />
                        </div>
                        <div className="namebox">
                            <h4>{user ? `${user && user.first_name} ${user && user.last_name}` : 'NIACOM NIGERIA LIMITED INTERNATIONAL'}</h4>
                        </div>
                        <div className="detailbox">
                            <p>Company ID <span>999933</span></p>
                            <p>RC Number <span>RC6390</span></p>
                            <p>Company ID <span>389933</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 col-sm-6 col-12">
                    <div className="profilebox">
                        <div className="namebox-no-mt">
                            <h4>Billing</h4>
                        </div>
                        <div className="detailbox">
                            <p>Card Number <span>xxxx-xxx-xxx-9933</span></p>
                            <p>Total Paid <span>$ 67.00</span></p>
                            <p>Unpaid <span>$45.90</span></p>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-sm-6 col-12">
                    <div className="card spur-card" style={{marginTop: 5}}>
                        <div className="card-header">
                            <div className="spur-card-title">Invoices</div>
                        </div>
                        <div className="card-body">
                            <div className="my_profile">
                                <div className="table-responsive">
                                    <table className="table text-left text-caps table-bordered" id="myTable">
                                        <thead><tr><th>No</th><th>Date</th><th>Description</th><th>Method</th><th>Total Amount</th><th>Status</th><th>Action</th></tr></thead>
                                        <tbody>
                                            <tr><td>1</td>
                                                <td>27/09/2023</td>
                                                <td>Domain name renewal</td>
                                                <td>Paypal</td>
                                                <td>$5.90</td>
                                                <td><span className="badge badge-success">paid</span></td>
                                                <td>MARK SUCCESSFUL </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </> )}

            </div>
        </>
    );
}
