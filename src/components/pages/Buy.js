import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import './Buy.css' 


function Buy() {
    return (
        <>
            <div className="buy-bg">
                <Navbar />
                <div className="center">
                    <div className="buy-wrapper">
                        <h1 className="title-header">Buy NAMI or TLP</h1>
                        <div className="NAMI-TLP-wrapper">
                            <div className="NAMI-box">
                                <div className="NAMI-box-data">
                                    <h1 className="NAMI-TLP-title">NAMI</h1>
                                    <p className="description">NAMI is the utility and governance token</p>
                                    <p className="APR">APR: ...%</p>
                                </div>
                            </div>
                            <div className="TLP-box">
                                <div className="TLP-box-data">
                                    <h1 className="NAMI-TLP-title">TLP</h1>
                                    <p className="description">TLP is the platform's liquidity provider token. Accrues 70% of its generated fees.</p>
                                    <p className="APR">APR: ...%</p>
                                    <button className="buy-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="static-footer">
                    <Footer />
                </div>
            </div>
            
        </>
    )
}

export default Buy;