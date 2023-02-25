const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
};

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))
fetch('https://the-cocktail-db.p.rapidapi.com/popular.php', options)
    .then(response => response.json())
    .then(json => {
        const jsonString = JSON.stringify(json); // convert JSON object to string
        fs.writeFile("frontend/static/js/views/posts.json", jsonString, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
app.get("/*", function (req, res) {
    console.log(process.env.API_KEY);
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})


app.listen(8081, () => console.log("server running..."))




