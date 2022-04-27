#Token Data from coinraking API

Open https://developers.coinranking.com/api and click on "Generate key" button to get API key and add this key as a string to the HeaderBar.js and LineChart.js file to set var apiKey as your generated string.

#If no data is being generated

Inspect -> Console 
There will be an error: GET https://cors-anywhere.herokuapp.com/https://api.coinranking.com/v2/coin/AaQUAs2Mc?timePeriod=24h 403 (forbidden)
Simply open the link and click "allow temporary access to the demo server" and things should run smoothly.