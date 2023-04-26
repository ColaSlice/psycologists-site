import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';

function RegisterPage() {
    const [isLoading, setLoading] = useState(true);
    const [isNavigate, setNavigate] = useState(false);
    const [isRegistrered, setRegistrered] = useState(false);
    const nameForm = useRef(null);
    let navigate = useNavigate();

    const SetLoadingFalse = () => {
        setLoading(false);
    }

    useEffect(() => {
        const form = nameForm.current;
        if (!isLoading) {
            const userData = {
                username: form['username'].value,
                password: form['password'].value,
                email: form['email'].value,
                license: form['license'].value
            }
            axios.post("https://testside123.dk/api/LoginProxy/register", userData).then(response => {
                if(response.status.valueOf != 400){
                    setNavigate(true);
                }
            });
        }
    });

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
                <Popup trigger=
                    {<button onClick={SetLoadingFalse}>Registrer</button>}
                    modal nested>
                    {
                        close => (
                            <div className='modal'>
                                <div className='content'>
                                    <h3>You have been registrered</h3>
                                    <h4>Please do go to the login page</h4>
                                </div>
                                <div>
                                    <button onClick=
                                        {() => close()}>
                                            Close modal
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </Popup>
                
            </nav>
        </div>
    )
}
export default RegisterPage;
