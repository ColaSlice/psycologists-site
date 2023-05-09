import * as React from 'react';
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SaveToken from '../utils/SaveToken';
import ReadUserData from '../utils/ReadUserData';

function LoginPage() {
    const [isLoading, setLoading] = useState(false);
    const [isLogged, setLogged] = useState(false);
    const nameForm = useRef(null);
    let navigate = useNavigate();

    const SetLoadingFalse = () => {
        setLoading(true);
    }

    useEffect(() => {
        if(!isLoading && isLogged) {
            if(localStorage.getItem("user")) {
                SaveToken(localStorage.getItem("user"));
                navigate("/PrivatePage");
            }
        }

        if (isLoading && !isLogged) {
            const form = nameForm.current;
            const userData = {
                username: "",
                password: form['password'].value,
                email: form['email'].value,
                license: ""
            }

            axios.post("https://api.rbwr.dk/api/LoginProxy/login", userData).then(response => {
                if(response.status.valueOf !== 400) {
                    localStorage.setItem("user", response.data.token);
                    setLoading(false);
                    setLogged(true);
                }
            }).catch(
                console.log("ww")
            );
        }
    });

    return (
        <div>
            <div className='neo_login'>
            <label>Login</label>
                <form ref={nameForm}>
                    <input className='input' type="text" label="email" name="email" placeholder='Email@email.com'></input>
                    <br/>
                    <br/>
                    <input className='input' type='password' label='password' name='password' placeholder='P@ssword'></input>
                    <br/>
                    <br/>
                </form>
                <button onClick={SetLoadingFalse}>Log Ind</button>
            </div>
        </div>
    );
}
export default LoginPage;