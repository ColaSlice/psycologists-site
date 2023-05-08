import * as React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useEffect} from 'react';
//import ReadUserData from '../utils/ReadUserData';
import './style.css';

function MessagePage() {
    const [isLoading, setLoading] = useState(true);
    const [tempMessage, setTempMessage] = useState();
    const [message, setMessage] = useState(null);
    //const user = ReadUserData();
    const tempFinal = [];
    const final = [];
    const hej = "hej";

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
            if(!isLoading){
                for(let i = 0; i < 1; i++){
                    tempFinal[i] = tempMessage
                    //console.log(Object.values(tempFinal[i][0])[2])
                    final[i] = Object.values(tempFinal[i][0])[2];
                    console.log(final[i])
                }
            }
        }
    }, [final])
    

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    if(!isLoading){
        return (
            <div>
                <ul>
                    <li>{final.at(0)}</li>
                </ul>
            </div>
        );
    }
}
export default MessagePage;