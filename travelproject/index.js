const userRoutes = require('./src/app/routes/user.routes');
const express = require('express');
const logTool = require('morgan');
const bodyParser = require('body-parser');
//const middleware = require('');
const app = express();
const port=process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users',userRoutes);

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