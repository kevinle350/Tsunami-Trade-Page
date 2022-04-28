import React, { useState, useEffect } from 'react'
import './HeaderBar.css'

//Need to put own API key from coinranking at line 10
function HeaderBar({ timeLength }) {
    const [chart, setChart] = useState([])

    var baseUrl = "https://api.coinranking.com/v2/coin/AaQUAs2Mc?timePeriod=24h"
    var proxyUrl = "https://cors-anywhere.herokuapp.com/"
    var apiKey = "coinranking6773e58e21da9e4871b2ffb42bce33d57ebaf53357bd52de"

    useEffect(() => {
        const fetchCoins = async () => {
            await fetch(`${proxyUrl}${baseUrl}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `${apiKey}`,
                    'Access-Control-Allow-Origin': "*"
                }
            }).then((response) => {
                if (response.ok) {
                    response.json().then((json) => {
                        console.log(json.data)
                        setChart(json.data)
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        };

        fetchCoins()
    }, [baseUrl, proxyUrl, apiKey])

    //Turns array of strings into array of numbers
    var sparklineInt = chart?.coin?.sparkline.map(Number)

    return (
        <>
            <div className="header">
                <div className="header-data">
                    <h1 className="title">{chart?.coin?.symbol} / USD</h1>
                    <div className='data'>
                        <p className='data-description'>Price</p>
                        <p className='number-style'>${Number(chart?.coin?.price).toFixed(2)}</p>
                    </div>
                    <div className='data'>
                        <p className='data-description'>24h Change</p>
                        <p className='change-style'>{chart?.coin?.change}%</p>
                    </div>
                    <div className='data'>
                        <p className='data-description'>24h High</p>
                        <p className='number-style'>{Math.max.apply(null, sparklineInt).toFixed(2)}</p>
                    </div>
                    <div className='data'>
                        <p className='data-description'>24h Low</p>
                        <p className='number-style'>{Math.min.apply(null, sparklineInt).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBar;