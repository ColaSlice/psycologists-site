import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import ReadUserData from '../utils/ReadUserData';


function PrivatePage() {
    const cookies = new Cookies();
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [license, setLicense] = useState(null);
    let navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        cookies.remove("JWT");
        navigate("/");
    }

    useEffect(() => {
        const user = ReadUserData();
        setUsername(user[0]);
        setEmail(user[1]);
        setLicense(user[2]);

    }, [username], [])

    return (
        <div className='neo_register'>
            <h1>Hej <span>{username}</span></h1>
            <br/>
            <label>Fulde navn: <span>{username}</span></label>
            <br/>
            <label>Email: <span>{email}</span></label>
            <br/>
            <label>License: <span>{license}</span></label>
            <br/>
            <button onClick={logout}>Log out</button>
        </div>
    );
}
export default PrivatePage;