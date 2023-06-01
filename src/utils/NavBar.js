import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return(
        <>
            <nav>
                <ul className='neo_ul'>
                    <li className='neo_li'><Link to="/">Home</Link></li>
                    <li className='neo_li'><Link to="/LoginPage">Login</Link></li>
                    <li className='neo_li'><Link to="/RegisterPage">Register</Link></li>
                    <li className='neo_li'><Link to="/MessagePage">Message</Link></li>
                    <li className='neo_li'><Link to="/PrivatePage">Bruger side</Link></li>
                </ul>
            </nav>
        </>
        )
    }
}