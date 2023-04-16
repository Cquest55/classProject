const userRoutes = require('./src/app/routes/user.routes');
const authRoutes = require('./src/app/routes/auth.routes');
const test = require('./src/app/routes/auth.routes');
const express = require('express');
const logTool = require('morgan');
const bodyParser = require('body-parser');
const path = require("path");
//const middleware = require('');
const app = express();
const port=process.env.PORT || 8080;


app.use('/node_modules', express.static('node_modules'));
app.use('/src', express.static('src'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/auth',authRoutes);
app.use('/build-user-list.js',test)
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get("/index", (req, res) => {
    res.render(path.join(__dirname + "/src/app/index.html"));
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


app.get("/build-user-list.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/build-user-list.js");
});


app.get("/route-guard.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/route-guard.js");
});

app.get("/service-helper.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/service-helper.js");
});


app.get("/storage.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/storage.js");
});

app.get("/user.service.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/user.service.js");
});

app.get("/frontendLogic.js", function(req, res){
    res.sendFile(__dirname + "/src/app/view/frontendLogic.js");
});

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/src/app/view/home.html");
});
app.get("src/app/view/styles.css", function(req, res){
    res.sendFile(__dirname + "/src/app/view/styles.css");
});

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css')); // redirect CSS bootstrap

app.listen(port, () => {
    console.log(`running at port ${port}`);
});