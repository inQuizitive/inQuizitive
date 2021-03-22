const express = require('express');
const router = express.Router();
const Users = require('../models/schemas/users');
// const Results = require('../models/schemas/results');

router.get('/', (req, res) => {
    Users.find({}, (err, users) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'there is a problem with the router-get', err });
        } else {
            res.status(200).json({ status: 'All is well with the Get', users });
        }
    });
});

router.post('/new-account', async (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
        return res.status(400).json({ status: 'Error', err: 'The passwords do NOT match' })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    new Users(req.body).save((err, user) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'There is a problem', err });
        } else { 
            res.status(200).send({ status: 'All is good', emailAddress: user.emailAddress, username: user.username, userID: user._id });
        }
    });
});