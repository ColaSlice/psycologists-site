import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let auth = {'token':false};
    if (localStorage.getItem("user")) {
        auth = {'token':true};
    }
    if (localStorage.getItem("ok")) {
        auth = {'token':true};
    }
    
    return (
        auth.token ? <Outlet/> : <navigate to="/"/>
    )
}

export default PrivateRoute;