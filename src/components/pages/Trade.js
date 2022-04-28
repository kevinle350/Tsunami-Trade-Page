import React, { useState } from "react";
import HeaderBar from "../HeaderBar";
import LineChart from "../LineChart";
import Navbar from "../Navbar";
import './Trade.css'
import Form from 'react-bootstrap/Form'
import Positions from "../Positions";
import Footer from "../Footer";

//@TODO Functionality of rendering different graph data on click
//Responsiveness needs to be done
function Trade() {
    const [span, setSpan] = useState("24h")
    const [isPosition, setIsPosition] = useState(true)
    const [isOrders, setIsOrders] = useState(false)
    const [isTrades, setIsTrades] = useState(false)
    return (
        <>
            <div className="bg">
                <Navbar />
                <div className="data-wrapper">
                    <HeaderBar />
                    <div className="buttons-grid">
                        <button className="buttons-grid-style" onClick={() => setSpan("24h")}>24h</button>
                        <button className="buttons-grid-style" onClick={() => setSpan("7d")}>7d</button>
                        <button className="buttons-grid-style" onClick={() => setSpan("30d")}>30d</button>
                    </div>
                    <div className="graph">
                        <LineChart span={span} />
                    </div>
                    <div className="positions-wrapper">
                        <div className="positions">
                            <button className={isPosition ? "info-btn clicked" : "info-btn "} onClick={() => {setIsPosition(true); setIsOrders(false); setIsTrades(false)}}>Positions</button>
                            <button className={isOrders ? "info-btn clicked" : "info-btn"} onClick={() => {setIsPosition(false); setIsOrders(true); setIsTrades(false)}}>Orders</button>
                            <button className={isTrades ? "info-btn clicked" : "info-btn"} onClick={() => {setIsPosition(false); setIsOrders(false); setIsTrades(true)}}>Trades</button>
                        </div>
                        <Form >
                            <Form.Check
                                type={"checkbox"}
                                id={`default-${"checkbox"}`}
                                label={`Chart Positions`}
                            />
                        </Form>
                    </div>
                    <Positions />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Trade;