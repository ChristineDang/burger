// import express from 'express';

// import burger from '../models/burger.js';

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.selectAll(function(data){
        var hbsObj = {burger: data };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/burgers/insertOne", function(req, res){
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        function() {
            res.redirect("/burgers");
        }
    );
});

router.put('/burgers/insertOne/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log(req.params.id);
  
    console.log('condition', condition);
  
    burger.updateOne( { devoured: true }, condition, function (data) {
      res.redirect('/burgers');
    });
  });

module.exports = router;