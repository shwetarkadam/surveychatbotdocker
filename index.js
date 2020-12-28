const express = require('express')
const app = express()

app.use(express.static("public"))

var bodyParser = require('body-parser')


// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/",function(req,res,next){
    res.render("index")
});

app.post("/test", function (req, res,next) {
    console.log(req.body);
    res.send("hello world");
});
app.get("/exit", function (req, res,next) {

    res.render("test");
});
app.listen(8080, () => console.log('Example app listening on port 8080!'))
