import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

//@TODO Add routes to these links
function Navbar() {
    const [isDashboard, setIsDashboard] = useState(false)
    const [isEarn, setIsEarn] = useState(false)
    const [isBuy, setIsBuy] = useState(false)
    const [isTrade, setIsTrade] = useState(true)
    return (
        <>
            <div className='navbar'>
                <div className='navbar-container'>
                    <h1>
                        <Link to='/home' className='tsunami'>
                            Tsunami
                        </Link>
                    </h1>
                    <Link 
                        to='/dashboard'
                        className={isDashboard ? "link clicked" : "link"} 
                        onClick={() => {setIsDashboard(true); setIsEarn(false); setIsBuy(false); setIsTrade(false)}}>
                        Dashboard
                    </Link>
                    <Link 
                        to='/earn' 
                        className={isEarn ? "link clicked" : "link"} 
                        onClick={() => {setIsDashboard(false); setIsEarn(true); setIsBuy(false); setIsTrade(false)}}>
                        Earn
                    </Link>
                    <Link 
                        to='/buy' 
                        className={isBuy ? "link clicked" : "link"} 
                        onClick={() => {setIsDashboard(false); setIsEarn(false); setIsBuy(true); setIsTrade(false)}}>
                        Buy
                    </Link>
                    <Link 
                        to='/trade' 
                        className={isTrade ? "link clicked" : "link"} 
                        onClick={() => {setIsDashboard(false); setIsEarn(false); setIsBuy(false); setIsTrade(true)}}>
                        Trade
                    </Link>
                    <button
                        to='/trade'
                        className="docs" 
                        onClick={() => window.open("https://mutabledev.gitbook.io/tsunami/")}>
                        Docs
                    </button>
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
