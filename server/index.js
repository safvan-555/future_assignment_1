var express = require('express')
var app= express()
const bodyParser = require("body-parser");
const compression = require("compression");
var cors = require('cors');


app.use(cors())
app.use(compression()); //compress stylesheets & codefiles
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

var movies = require('./controllers/movies')


app.use('/movies', movies)


app.get('/*', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
  })
  
app.listen(4000,"0.0.0.0",()=>{console.log('connect to port number 4000')})