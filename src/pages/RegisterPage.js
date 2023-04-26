import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import 'reactjs-popup/dist/index.css';

function RegisterPage() {
    const [isLoading, setLoading] = useState(true);
    const [isRegistrered, setRegistrered] = useState(false);
    const nameForm = useRef(null);

    const SetLoadingFalse = () => {
        setLoading(false);
    }

    useEffect(() => {
        const form = nameForm.current;
        if (!isLoading) {
            if(!isRegistrered){
                const userData = {
                    username: form['username'].value,
                    password: form['password'].value,
                    email: form['email'].value,
                    license: form['license'].value
                }
                axios.post("https://testside123.dk/api/LoginProxy/register", userData).then(response => {
                    setRegistrered(true);
                    setLoading(false);
                });
            }
        }
    });

    if(!isLoading){
        if(isRegistrered){
            alert("You have been registrered, please go to the login page.")
        }
    }
    
    return (
        <div>
            <h1>Register page</h1>
            <nav>
                <form ref={nameForm}>
                    <div className='centerDiv2'>
                        <input type="text" label="username" name="username"/>
                        <input type="password" label="password" name="password"></input>
                        <input type="text" label="email" name="email"></input>
                        <input type="text" label="license" name="license"></input>
                    </div>
                </form>
                <button onClick={SetLoadingFalse}>Registrer</button>
            </nav>
        </div>
    )
}
export default RegisterPage;
