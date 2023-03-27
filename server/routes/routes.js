const router = require("express").Router();
const about = require("../controllers/about.controller")
const weather = require("../controllers/weather.controller")

router.get("/about", about.showInfo);
router.get("/", weather.client)
router.post("/", weather.location)

module.exports = router;
