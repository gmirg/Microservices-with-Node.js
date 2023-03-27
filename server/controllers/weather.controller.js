const https = require('https')

const weather = {
    client: async (req, res) => {
        res.sendFile(__dirname, + "index.html")   
    },
    location: async (req,res ) => {
        const city = req.body.cityName
        console.log(city)
        const appiKey = "007e004d27b809f52ccd1688e829df1d"
        const unit = req.body.unit

        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&amp;appid="+appiKey+"&amp;units="+unit+""
        console.log(url)
        https.get(url, (response)=> {
            response.on("data", (chunk)=> {
                const responseData = JSON.parse(chunk);
                const temperature = responseData.main.temp;
                const weatherDes = responseData.weather[0].description;
                const icon = responseData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
                const cityName = responseData.name;
                res.write(`&lt;h1&gt;The weather is ${temperature} degree celsius in ${cityName} and the description is ${weatherDes} &lt;/h1&gt;`)
                res.write("&lt;img src="+ imageURL +"&gt;")
                res.send()
            })
        })
    }
}
module.exports = weather;