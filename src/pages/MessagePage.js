import * as React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useId, useEffect} from 'react';


function MessagePage() {
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get("https://testside123.dk/api/DatabaseProxy/getmessages?toUser=a").then(response => {
            setUser(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className='CenterDiv2'>
            <h1>Message page</h1>
            <p>From user: {user[0].user}</p>
            <div>
                <ol>
                    {user.map((item) => (<p>{item.message}</p>))}
                </ol>
            </div>
        </div>
    );
}
export default MessagePage;