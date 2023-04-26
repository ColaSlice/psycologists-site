import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [isLoading, setLoading] = useState(true);
    const [isLogged, setLogged] = useState(false);
    const nameForm = useRef(null);
    let navigate = useNavigate();

    const SetLoadingFalse = () => {
        setLoading(false);
    }

    useEffect(() => {
        if (!isLoading) {
            const form = nameForm.current;
            const userData = {
                username: form['username'].value,
                password: form['password'].value,
                email: form['email'].value,
                license: form['license'].value
            }
            axios.post("https://testside123.dk/api/LoginProxy/login", userData).then(response => {
                if(response.status.valueOf !== 400) {
                    localStorage.setItem("user", response.data.token);
                    setLoading(true);
                    setLogged(true);
                }
            });
        }
    });

    if(isLoading) {
        if(localStorage.getItem("user")) {
            if(isLogged){
                navigate("/PrivatePage");
            }
        }
    }


    return (
        <div>
            <h1>Login page</h1>
            <form ref={nameForm}>
                <div className='centerDiv2'>
                    <input type="text" label="username" name="username"/>
                    <input type="password" label="password" name="password"></input>
                    <input type="text" label="email" name="email"></input>
                    <input type="text" label="license" name="license"></input>
                </div>
            </form>
            <button onClick={SetLoadingFalse}>Logind</button>
        </div>
    );
}
export default LoginPage;