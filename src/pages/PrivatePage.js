import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function PrivatePage() {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
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