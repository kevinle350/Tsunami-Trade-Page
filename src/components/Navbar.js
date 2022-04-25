import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

//@TODO Add routes to these links
function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <h1>
                        <Link to='/home' className='tsunami'>
                            Tsunami
                        </Link>
                    </h1>
                    <Link to='/dashboard' className='link'>
                        Dashboard
                    </Link>
                    <Link to='/earn' className='link'>
                        Earn
                    </Link>
                    <Link to='/buy' className='link'>
                        Buy
                    </Link>
                    <Link to='/trade' className='link'>
                        Trade
                    </Link>
                    <Link to='/docs' className='link'>
                        Docs
                    </Link>
                </div>
                <div className='btn-format'>
                    <button className='trade-btn'>Trade</button>
                    <button className='connect-btn'>Connect Wallet</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
