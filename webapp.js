var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/bugsdb';

var app = express();
var db;

app.use(express.static('static'));


var bugData = [
    { id: "101", status: "Open", priority: "High", owner: "Fred Flintstone", title: "Page Fault" },
    { id: "102", status: "Test", priority: "Low", owner: "Barney Rubble", title: "General Protection Fault" }    
];

app.get('/api/bugs', function (req, res) {
    db.collection('bugs').find().toArray(function(err, bugs) {
        res.json(bugs);
    });
});

app.use(bodyParser.json());

app.post('/api/bugs', function (req, res) {
    console.log("Req body:", req.body);
    var newBug = req.body;
    newBug.id = bugData.length + 1;
    bugData.push(newBug);
    
    res.json(newBug);
});

MongoClient.connect(url, function(err,dbConnection) {
    assert.equal(null, err);
    console.log("Connected correctly to MongoDB server.");
    db = dbConnection;
        
    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Example app listening on port ' + port);
    });
})
