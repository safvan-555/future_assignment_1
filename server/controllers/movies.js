var express = require('express')
var router = express.Router()
var moviesJson=require('../movies.json')
router.get('/get_movies',function(req,res){
    res.json(moviesJson.movies)
})

module.exports=router
