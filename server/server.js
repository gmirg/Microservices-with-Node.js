const express = require("express");
const routes = require("./routes/routes")

const PORT = 3000;
const HOST_NAME = "localhost";

const app = express();
app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", routes);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});