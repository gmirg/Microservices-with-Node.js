const properties = require("../../package.json");

const about = {
    showInfo: (req, res) => {
        const aboutInfo ={
            name: properties.name,
            description: properties.description,
            author: properties.author
        }
        res.json(aboutInfo)
    }
}
module.exports = about;
