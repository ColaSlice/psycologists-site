import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from 'axios';

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
            if(!isRegistrered) {
                const userData = {
                    username: form['username'].value,
                    password: form['password'].value,
                    email: form['email'].value,
                    license: form['license'].value
                }
                try {
                    axios.post("https://api.rbwr.dk/api/LoginProxy/register", userData).then(response => {
                        if(response.status.valueOf !== 400) {
                            setRegistrered(true);
                            setLoading(true);
                        }
                        else {
                            console.log("FUK")
                        }
                    });
                } catch (error) {
                    alert(error)
                }
            }
        }
    }, [isLoading, isRegistrered]);

    useEffect(() => {
        if(isRegistrered) {
            if(isLoading) {
                alert("You have been registrered, please go to the login page.")
            }
        }
    }, [isRegistrered, isLoading])
    
    return (
        <div>
            <nav>
                <div className='neo_register'>
                    <label>Register Account</label>
                    <form ref={nameForm}>
                        <input className='input' type="text" label="username" name="username" placeholder='Full Name'/>
                        <br/>
                        <br/>
                        <input className='input' type="password" label="password" name="password" placeholder='P@ssword'></input>
                        <br/>
                        <br/>
                        <input className='input' type="text" label="email" name="email" placeholder='Email@email.com'></input>
                        <br/>
                        <br/>
                        <input className='input' ype="text" label="license" name="license" placeholder='Profesional License'></input>
                        <br/>
                        <br/>
                    </form>
                    <button onClick={SetLoadingFalse}>Registrer</button>
                </div>
            </nav>
        </div>
    )
}
export default RegisterPage;
