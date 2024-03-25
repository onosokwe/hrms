import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../../utils/actions";

import RowStats from "./RowStats";
import RowPayroll from "./RowPayroll";

export default function HomeLanding() {
    const TOKEN = localStorage.getItem("kloka:token:data");
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getLoggedInUser(TOKEN).then((res) => { setProfile(res.data.data);  }).catch((err) => { console.log(err.response) });
    }, [TOKEN]);

    return (
        <>

            <RowStats  user={profile ? profile : null} />
            <RowPayroll user={profile ? profile : null} />
                
        </>
    );
}
