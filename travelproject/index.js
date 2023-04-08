const userRoutes = require('./src/app/routes/user.routes');
const authRoutes = require('./src/app/routes/auth.routes');
const express = require('express');
const logTool = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
//const middleware = require('');
const app = express();
const port=process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/auth',authRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/app/index.html"));
})
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/src/app/view/login.html");
})
app.get("/signUp", (req, res) => {
    res.sendFile(__dirname + "/src/app/view/signUp.html");
})

app.get("/apiOne.js", function(req, res){
    res.sendFile(__dirname + "/src/app/apiOne.js");
});

app.get("/propertiesreader.js", function(req, res){
    res.sendFile(__dirname + "/src/app/propertiesreader.js");
});
app.get("/frontendLogic.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/frontendLogic.js");
});


app.use(
    "/css",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)
app.use(
    "/js",
    express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")))



app.listen(port, () => {
    console.log(`running at port ${port}`);
});