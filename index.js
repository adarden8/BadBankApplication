var express = require('express');
var app = express();
var cors = require('cors');
var dal = require('./dal');


// used to serve static files from public directory
app.use(express.static('public'));
app.search(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email,req.params.password).
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

// deposit
app.get('/account/deposit/:email/:amount', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.amount
    });
});

// withdraw
app.get('/account/withdraw/:email/:amount', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.amount
    });
});

// balance
app.get('/account/balance/:email', function (req, res) {
    res.send({
        email: req.params.email,
        balance: req.params.balance
    });
});

// all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
}); 

var port = 3000;
app.listen(port);
console.log('Running on port:' + port);
