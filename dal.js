const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected successfully to db server');

    db = client.db('AnnaDardenBadBank');
});

function create(name, email, password) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

function enterTransToDb(email, date, transType, amount) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('transactionHistory');
        const doc = {email, date, transType, amount};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

function getAllTransactions(email) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('transactionHistory')
            .find({"email": email})
            .project({"_id": 0, "email": 0})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

function all(email, password) {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({"email": email, "password": password})
            .project({"_id": 0})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

function balance(email, password) {
    console.log('input ' + email, password);
    return new Promise((resolve, reject) => {
        const collection = db
            .collection('users')
            .find({"email": email, "password": password})
            .project({"balance": 1, "name": 1, '_id': 0})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

function transaction(email, newBalance){
    console.log('newBalance datatype of ' + newBalance + ' is ' + typeof(newBalance));
    return new Promise((resolve, reject) => {    
        const customer = db
            .collection('users')         
            .updateOne({"email": email }, {$set : {"balance" : newBalance}})
            .then((result) => {
                console.log('trans dal then ' + JSON.stringify(result));
                resolve(result)
            })
            .catch((err) => {
                console.log('trans dal catch ' + JSON.stringify(err));
                reject(err)
            });  
    });   
}

module.exports = {create, all, balance, transaction, enterTransToDb, getAllTransactions};