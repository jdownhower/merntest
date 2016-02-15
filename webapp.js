var express = require('express');
var app = express();

app.use(express.static('static'));

var bugData = [
    { id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" },
    { id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" }    
];

app.get('/api/bugs', function (req, res) {
    res.status(200).send(JSON.stringify(bugData)); 
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Example app listening on port ' + port);
});
