import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';


function PrivatePage() {
    const cookies = new Cookies();
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("ok");
        localStorage.removeItem("respone");
        cookies.remove("jwt-authorization");
        navigate("/");
    }

    return (
        <div>
            <h1>Private page</h1>
            <button onClick={logout}>Log out</button>
        </div>
    );
}
export default PrivatePage;