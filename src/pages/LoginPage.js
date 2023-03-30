import * as React from 'react';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import jwt from "jwt-decode";
import Cookies from 'universal-cookie';
import axios from 'axios';


function GetToken(username, password, email, license) {
    axios.post("http://localhost:5002/api/Proxy/login", {
        username,
        password,
        email,
        license
    }).then((response) => {
        if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data.token));
        }
        else {
            console.log("SOmething went wrong");
        }
    });
    return localStorage.getItem("user");
}

function CheckForUser() {
    if (localStorage.getItem("user") == null) {
        return false;
    }

    return true;
}

function LoginPage() {
    const nameForm = useRef(null);
    const [user, setUser] = useState(null);
    const cookies = new Cookies();
    let navigate = useNavigate();

    const check = () => {
        var userExists = CheckForUser();

        if (userExists === true) {
            navigate("/PrivatePage");
        }
    }

    const login = () => {
        var userExists = CheckForUser();

        if (userExists === true) {
            navigate("/PrivatePage");
        }

        const form = nameForm.current

        const jwt_token = GetToken(form['username'].value, form['password'].value, form['email'].value, form['license'].value);
    
        // Decode the jwt token
        const decoded = jwt(jwt_token);

        // Set the user state
        setUser(decoded);

        // Set the cookie
        cookies.set("jwt-authorization", jwt_token, {
        expires: new Date(decoded.exp * 1000)
        });
    };

    return (
        <div onLoad={check}>
            <h1>Login page</h1>
            <div className='centerDiv2'>
                <form ref={nameForm}>
                    <input type="text" label="username" name="username"/>
                    <input type="password" label="password" name="password"></input>
                    <input type="text" label="email" name="email"></input>
                    <input type="text" label="license" name="license"></input>
                </form>
            </div>
            <button onClick={login}>Logind</button>
        </div>
    );
}
export default LoginPage;
