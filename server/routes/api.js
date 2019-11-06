const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/kendoUI', (err, db) => {
    var db =  db.db("kendoUI")
    if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/getSurvey', (req, res) => {
    connection((db) => {
        db.collection('survey')
            .find()
            .toArray()
            .then((data) => {
                response.data = data;
                res.setHeader('Access-Control-Allow-Origin','*')
		        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});


router.post('/addSurvey', (req, res) => {
    connection((db) => {
        db.collection('survey')
          .insertOne(req.body, (err, result) => {
            if(err){
                res.send('cannot add the survey at the moment');
            }else{
                res.json({status: 200, ok: true, message: 'Survey has beed added successfully!'});
            }
        });
    });
});
module.exports = router;
