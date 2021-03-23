const express = require('express');
const router = express.Router();
const Users = require('../models/schemas/users');
// const Results = require('../models/schemas/results');
const bcrypt = require('bcrypt')

// get method for user 
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

router.post('/', async (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
        return res.status(400).json({ status: 'Error', err: 'The passwords do NOT match' })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    new Users(req.body).save((err, user) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'There is a problem', err });
        } else { 
            res.status(200).send({ status: 'All is good', email: user.email, username: user.username, userID: user._id });
        }
    });
});

router.post('/search', (req, res) => {
    const query = {};
    if (req.body.username) {
        query.username = req.body.username;
    }
    if (req.body.email) {
        query.email = req.body.email;
    }
    Users.find(query, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: 'server error', err });
        } else if (!results) {
            res.status(404).json({ status: 'Page not found', msg: 'User can\'t be found' });
        } else { 
            res.status(200).json({ status: 'All is well', results });
        }
    });
});

router.delete("/id/:id", (req, res) => {
    Users.findOneAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: 'server error', err });
      } else if (!user) {
        console.log(err);
        res.status(404).json({ status: 'Problem', err: `The user with ID ${req.params.id} cannot be found and so cannot be deleted` });
      } else {
        res.status(200).json({ status: 'All is well', user, msg: `${req.params.id} has now been deleted` });
      }
    });
  });

//   check the user password - async & await allows for a process
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (await Users.checkPassword(email, password)) {
      Users.findOne({ emailAddress: email }, (err, user) => {
        if (err) {
          console.log(err);
          res.status(500).json({ status: "server error", err });
        } else if (!user) {
          res.status(404).json({ status: "Page not found", err: `User doesn't exist.` });
        } else {
          res.status(200).json({ status: `All is well`, email: user.email, username: user.username, userID: user._id });
        }
      });
      return;
    }
    res.status(401).json({ status: "Problem", err: `Access Denied.` });
  });

  router.get('/:id', function (req, res) {
    Users.findOne({ _id: req.params.id }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: "server error", err });
      } else {
        res.status(200).json({status: 'All good', user});
      }
    });
  })

  module.exports = router;