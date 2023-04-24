import * as React from 'react';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import jwt from "jwt-decode";
import Cookies from 'universal-cookie';
import axios from 'axios';




function MessagePage() {
    const nameForm = useRef(null);
    const SendMessage = () => {
        const form = nameForm.current
    }
    
    return (
        <div>
            <h1>Message page</h1>
            <div className='centerDiv'>
                
            </div>
            <div className='centerDiv'>
                <form ref={nameForm}>
                    <input type="text" label="chatbox" name="chatbox"/>
                </form>
            </div>
            <button onClick={SendMessage}>Logind</button>
        </div>
    );
}
export default MessagePage;