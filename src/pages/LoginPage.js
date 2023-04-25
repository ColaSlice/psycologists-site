import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loadCache } from 'axios-hooks';

function LoginPage() {
    const [isLoading, setLoading] = useState(true);
    let navigate = useNavigate();
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const SetLoadingFalse = () => {
        setLoading(false);
    }

    useEffect(() => {
        if (!isLoading) {
            const userData = {
                username: "a",
                password: "a",
                email: "a",
                license: "a"
            }
            axios.post("https://testside123.dk/api/LoginProxy/login", userData).then(response => {
                localStorage.setItem("user", response.data.token)
            });
        }
    });

    if(localStorage.getItem("user")) {
        navigate("/PrivatePage");
    }

    if(isLoading) {
        return (
            <div>
                <h1>Login page</h1>
                <div className='centerDiv2'>
                    <input type="text" label="username" name="username" id="username"/>
                    <input type="password" label="password" name="password" id="password"></input>
                    <input type="text" label="email" name="email" id="email"></input>
                    <input type="text" label="license" name="license" id="license"></input>
                </div>
                <button onClick={SetLoadingFalse}>Logind</button>
            </div>
        );
    }
}
export default LoginPage;