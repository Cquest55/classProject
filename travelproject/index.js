const express = require("express");
const app = express();
const port=8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/app/index.html");
})

app.get("/apiOne.js", function(req, res){
    res.sendFile(__dirname + "/src/app/apiOne.js");
});

app.get("/propertiesreader.js", function(req, res){
    res.sendFile(__dirname + "/src/app/propertiesreader.js");
});


app.listen(port, () => {
    console.log(`running at port ${port}`);
});