const mongoose = require("mongoose");

const User = require("./users");
//schema used to save data for uses that have attempted a quiz

const Results = new mongoose.Schema({
    //need to link to a user id that has taken the quiz

    quizUser: {type: mongoose.Schema.Types.ObjectId, ref: User, required: true},
    score: {type: Number, required: true},
    category: {type: String, required: true},
    difficulty: {type: String, required: true},
    quizDateTime: {type: Date, required: true},
})

module.exports = mongoose.model("QuizResults", Results);