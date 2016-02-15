var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));


var bugData = [
    { id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" },
    { id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" }    
];

app.get('/api/bugs', function (req, res) {
    res.json(bugData); 
});

app.use(bodyParser.json());

app.post('/api/bugs', function (req, res) {
    console.log("Req body:", req.body);
    var newBug = req.body;
    newBug.id = bugData.length + 1;
    bugData.push(newBug);
    
    res.json(newBug);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Example app listening on port ' + port);
});
