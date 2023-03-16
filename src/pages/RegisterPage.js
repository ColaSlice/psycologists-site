import * as React from 'react';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import jwt from "jwt-decode";
import Cookies from 'universal-cookie';
import axios from 'axios';

function RegisterUser(username, password, email, license) {
    axios.post("https://localhost:7253/api/Proxy/register", {
        username,
        password,
        email,
        license
    }).then((response) => {
        localStorage.setItem("respone", JSON.stringify(response.data));
        if (response.status === 200) {
            localStorage.setItem("ok", JSON.stringify(response.data));
        }
        else {
            console.log(response.statusText)
        }
    }).catch(
    );
    return localStorage.getItem("ok");
}

function RegisterPage() {
    const nameForm = useRef(null);
    let navigate = useNavigate();
    const register = () => {
        const form = nameForm.current
        if (localStorage.getItem("ok")) {
            navigate("/PrivatePage");
        }
        RegisterUser(form['username'].value, form['password'].value, form['email'].value, form['license'].value)
    }

    return (
        <div>
            <h1>Register page</h1>
            <nav>
            <form ref={nameForm}>
                <input className='hej' type="text" label="username" name="username"/>
                <input className='hej' type="password" label="password" name="password"></input>
                <input className='hej' type="text" label="email" name="email"></input>
                <input className='hej' type="text" label="license" name="license"></input>
            </form>
            <button onClick={register}>Registrer</button>
            </nav>
        </div>
    )
}
export default RegisterPage;