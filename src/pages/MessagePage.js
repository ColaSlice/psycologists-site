import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import './style.css';
import MessageHandler from '../utils/MessageHandler'

function MessagePage() {
    const [isLoading, setLoading] = useState(true);
    const [isSending, setSending] = useState(false);
    const [tempMessage, setTempMessage] = useState([]);
    const nameForm = useRef(null);

    const SetSendingTrue = () => {
        setSending(true);
    }

    useEffect(() => {
        if(!isLoading && isSending) {
            const form = nameForm.current;
            const data = {
                ToUser: "a",
                Email: "admin@admin",
                Message: form['message'].value,
                TimeStamp: "2023-04-12T10:52:30.295Z"
            }
            // Send the messages.
            axios.post("https://api.rbwr.dk/api/MessageProxy/sendmessage", data).then(response => {
                if(response.status.valueOf !== 400) {
                    setSending(false);
                    setLoading(true);
                }
            })
        }

        if(isLoading && !isSending) {
            // Get the messages.
            axios.get("https://api.rbwr.dk/api/DatabaseProxy/getmessages?toUser=a").then(response => {
                setTempMessage(response.data);
                setLoading(false);
            });
        }
    }, [isLoading, isSending]);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if(!isLoading) {
        return (
            <div className='neo_message scroll'>
                <ul>
                    {MessageHandler(tempMessage)}
                </ul>
                <form ref={nameForm}>
                    <input className='input' type='text' label='message' name='message' placeholder='Besked'></input>
                </form>
                <button onClick={SetSendingTrue}>Send</button>
            </div>
        );
    }
}
export default MessagePage;