const express = require("express");
const router = express.Router();
const Users = require("../models/schemas/users");
const Result = require("../models/schemas/quiz")
const bcrypt = require("bcrypt");


router.get("/", async (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "there is a problem with the router-get", err });
    } else {
      //Maps over the user object. Binds email and username to secureUsers variable
      //Calls secureUsers on line 19 so that that password isn't passed through
      const secureUsers = users.map((user) => {
        return {
          email: user.email, username: user.username
        }})
      res.status(200).json({ status: "All is well with the Get", secureUsers});
    }
  });
});

router.post("/signup", async (req, res) => {
  if (req.body.password !== req.body.passwordCheck) {
    return res
      .status(400)
      .json({ status: "Error", err: "The passwords do NOT match" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  new Users(req.body).save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "There is a problem", err });
    } else {
      res.status(200).send({
        status: "All is good",
        email: user.email,
        username: user.username,
        userID: user._id,
      });
    }
  });
});

router.post("/search", (req, res) => {
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
      res.status(500).json({ status: "server error", err });
    } else if (!results) {
      res
        .status(404)
        .json({ status: "Page not found", msg: "User can't be found" });
    } else {
      res.status(200).json({ status: "All is well", results });
    }
  });
});

router.delete("/id/:id", (req, res) => {
  Users.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "server error", err });
    } else if (!user) {
      console.log(err);
      res.status(404).json({
        status: "Problem",
        err: `The user with ID ${req.params.id} cannot be found and so cannot be deleted`,
      });
    } else {
      res.status(200).json({
        status: "All is well",
        user,
        msg: `${req.params.id} has now been deleted`,
      });
    }
  });
});

//   check the user password - async & await allows for a process
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (await Users.checkPassword(email, password)) {
    Users.findOne({ email: email }, (err, user) => {
      if (err) {
        console.log(err);
        res.status(500).json({ status: "server error", err });
      } else if (!user) {
        res
          .status(404)
          .json({ status: "Page not found", err: `User doesn't exist.` });
      } else {
        res.status(200).json({
          status: `All is well`,
          email: user.email,
          username: user.username,
          userID: user._id,
        });
      }
    });
    return;
  }
  res.status(401).json({ status: "Problem", err: `Access Denied.` });
});

router.get("/:id", function (req, res) {
  Users.findOne({ _id: req.params.id }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).json({ status: "server error", err });
    } else {
      //stores the password into the password variable. Then stores all other data from the object into
      //userWithoutPassword. This is then converted to a JS object with the toObject()
      //We then call this as userWithoutPassword so that all detail minus password is passed through
      const {password, ...userWithoutPassword }= user.toObject(); 
      res.status(200).json({ status: "All good", userWithoutPassword });
    }
  });
});

router.post("/leaderboard", (req, res) => {
  Users.find({}, async (err, users) => {
    if(err) {
      console.log(err);
      res.status(500).json({status: "ERROR", err});
    }
    else {
      const results = await Promise.all(users.map(async (user) => {
        const results = await Result.find({quizUser: user._id}).exec()
        return {username: user.username, results}
      }));
      res.status(200).json({status: "HAPPY DAYS", results});
    }
  })
})

module.exports = router;
