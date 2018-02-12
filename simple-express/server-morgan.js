var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path')

var hostman = 'localhost';
var port = '3000';

var app = express();

app.use(morgan('dev', {
    skip: function (req, res) {
        return q.statusCode < 400;
    }
}));

app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a', encoding: 'ascii'})
}));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostman, function () {
    console.log(`server running at http://${hostman}:${port}/`);
})
