import React from 'react'
import './Positions.css'

function Positions() {
    return (
        <>
            <div className='bottom-wrapper'>
                <div className="bottom">
                    <div className="bottom-data">
                        <p>Position</p>
                        <p>Net Value</p>
                        <p>Size</p>
                        <p>Collateral</p>
                        <p>Mark Price</p>
                        <p>Entry Price</p>
                        <p>Liq. Price</p>
                    </div>
                </div>
                <div className='bottom2'>
                    <p className='bottom2-data'>No open positions</p>
                </div>

            </div>
        </>
    )
}

export default Positions;