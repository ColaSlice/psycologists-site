import * as React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useEffect} from 'react';
//import ReadUserData from '../utils/ReadUserData';
import './style.css';

function MessagePage() {
    const [isLoading, setLoading] = useState(true);
    const [tempMessage, setTempMessage] = useState(null);
    const [message, setMessage] = useState(null);
    //const user = ReadUserData();
    const final = [];

    useEffect(() => {
        if(isLoading) {
            axios.get("https://testside123.dk/api/DatabaseProxy/getmessages?toUser=a").then(response => {
                setTempMessage(response.data);
                setLoading(false);
            });
        }
    }, [isLoading, tempMessage]);

    useEffect(() => {
        if(tempMessage !== null) {
            //console.log(tempMessage[0].message)
            tempMessage.forEach(element => {
                final[element] = element.message;
                console.log(final);
            });
        }
    })

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div>
            <ul>
            </ul>
        </div>
    );
}
export default MessagePage;