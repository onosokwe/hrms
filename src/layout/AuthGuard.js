import React from "react";
import { useHistory } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { getLoggedInUser } from "../utils/helper";

const AuthGuard = ({ children, ...rest }) => {
  const token = localStorage.getItem("kloka:token:data");
  const [profile, setProfile] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    if(token){
        getLoggedInUser(token)
            .then((res) => {
                if(res.data.success){
                  setProfile(res.data.data);
                }else {
                  setTimeout(() => {
                    history.push("/");
                  }, 4500);
                }
            })
            .catch((err1) => {
                console.log(err1.response.data.error);
            });
        }else {
            history.push("/");
      }
    }, [token, history]);

    console.log(profile)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        (token) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthGuard;
