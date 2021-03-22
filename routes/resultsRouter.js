const express = require("express");
const router = express.Router();

const Results = require("../models/schemas/quiz.js");
const Users = require("../models/schemas/users.js");

//finding results from the database
router.get("/", (req, res) => {
    Results.find({}, (err, results) => {
        if (err){
            console.log(err);
            res.status(500).json({ status:"ERROR", err});
        }
        else {
            res.status(200).json({ status:"HAPPY DAYS", results});
        }
    });
});

//saving results to the database
router.post("/save", (req, res) => {
    new Results(req.body).save((err, result) => {
        if (err){
            console.log(err);
            res.status(500).json({ status: "ERROR", err });
        }
        else {
            res.status(200).send({ status: "HAPPY DAYS", result });
        }
    });
});

//search for results by querying score, category and difficulty
router.post("/search", (req, res) => {
    const query = {};
    if (req.body.score) {
        query.score = req.body.score;
    }
    if (req.body.category) {
        query.category = req.body.category;
    }
    if (req.body.difficulty) {
        query.difficulty = req.body.difficulty;
    }
    if (req.body.quizDateTime) {
        query.quizDateTime = req.body.quizDateTime;
    }

    Results.find(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'ERROR', err});
        } else if (!results) {
            res.status(404).json({status: 'ERROR', msg: 'Not found'});
        } else {
            res.status(200).json({status: 'HAPPY DAYS', results})
        }
    });
});


//finding a specific users results 
router.post('/user/', (req, res) => {
    Results.find({quizUser: req.body.id}, async (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({status: 'ERROR', err});
        } else if (!results) {
            res.status(404).json({status: 'ERROR', msg: 'CANNOT FIND RESULTS'});
        } else {
            const user = await Users.findOne({_id: req.body.id}).exec();
            res.status(200).json({status: 'HAPPY DAYS', results, username: user.username, quizUser: user._id})
        }
    });
});

module.exports = router;