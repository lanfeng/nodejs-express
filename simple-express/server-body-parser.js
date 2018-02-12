var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev'));

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a', encoding: 'ascii'})
}));

app.use(bodyParser.json());

app.all('/dishes', function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
});

app.get('/dishes', function (req, res, next){
    res.end('will send all the dishes to you...')
});

app.post('/dishes', function(req, res, next){
    res.end('will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})

app.delete('/dishes', function(req, res, next){
    res.end('deleting all dishes')
})

app.get('/dishes/:dishId', function(req, res, next){
    res.end('will send detail of the dish: ' + req.params.dishId + ' to you...');
})

app.put('/dishes/:dishId', function(req, res, next){
    res.end('will update detail of the dish: ' + req.params.dishId + ' ' + req.body.name +' to you...');
});

app.delete('/dishes/:dishId', function(req, res, next){
    res.end('deleting dish: ' + req.params.dishId);
})

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function() {
    console.log(`server running at http://${hostname}/${port}`);
})