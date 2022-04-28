import React, {useState, useEffect} from 'react' 
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'
import {Line} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

//Need to put own API key from coinranking at line 10
function LineChart({timeLength}) {
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
    }, [baseUrl, proxyUrl, apiKey, chart?.price])

    var data = {
        labels: chart?.coin?.sparkline.map((price, index) => index),
        datasets: [{
            label: '${chart?.coins.length} Coins Avaliable',
            data: chart?.coin?.sparkline.map(price => price),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <>
            <Line
                data = {data}
                options = {options}
            />
        </>
    )
}

export default LineChart;