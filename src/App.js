import { BrowserRouter as Router, Route } from "react-router-dom";
import isLoggedIn from "./utils/isLoggedIn";
import Layout from "./layout/Layout";

import Login from "./pages/auth/Login";

// organization
import Landing from "./pages/dashboard/Landing";

import CompanyProfile from "./pages/organization/Profile";
import CompanyDepartments from "./pages/organization/Departments";
import CompanyBranches from "./pages/organization/Branches"

import Employees from "./pages/people/Employees";


import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-multi-carousel/lib/styles.css";


function App() {
  return (
    <Router>
      {isLoggedIn() ? 
      <>
      <Layout>
        <Route exact path={"/dashboard"} component={Landing}></Route>
        <Route exact path={"/company-profile"} component={CompanyProfile}></Route>
        <Route exact path={"/company-departments"} component={CompanyDepartments}></Route>
        <Route exact path={"/company-branches"} component={CompanyBranches}></Route>


        <Route exact path={"/employees"} component={Employees}></Route>

      </Layout>
      </> : 
      <>
        <Route path={"/"} component={Login} />
      </>
        }

    </Router>
  );
}

export default App;
