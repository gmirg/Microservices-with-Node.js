const https = require('https')

const weather = {
    client: async (req, res) => {
        res.sendFile(__dirname, + "index.html")   
    },
    location: async (req,res ) => {
        const city = req.body.cityName
        
        const appiKey = process.env.API_KEY
        const unit = req.body.unit
        
        const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid="+appiKey+"&units="+unit+""
        
        https.get(url, (response)=> {
            response.on("data", (chunk)=> {
                const responseData = JSON.parse(chunk);
                const temperature = responseData.main.temp;
                const weatherDes = responseData.weather[0].description;
                const icon = responseData.weather[0].icon;
                const imageURL = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
                const cityName = responseData.name;
                res.set("Content-Type", "text/html")
                res.write(`<head><link rel="stylesheet" href="./styles.css"></head>`)
                res.write(`<div class="content"><h1 style="text-align:center">The temperature is</br> ${temperature} degree celsius in ${cityName} and the wheather is ${weatherDes}</h1>`)
                res.write(`<img class="icon" src=`+ imageURL +">"+ "</div>")
                res.send()
            })
        })
    }
}
module.exports = weather;