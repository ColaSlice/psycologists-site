import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const PrivateRoute = () => {
    const cookies = new Cookies();
    let auth = {'token':false};
    if (cookies.get("JWT")) {
        auth = {'token':true};
    }
    
    return (
        auth.token ? <Outlet/> : <navigate to="/"/>
    )
}

export default PrivateRoute;