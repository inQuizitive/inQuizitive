const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/schemas/users');
const Results = require('./models/schemas/quiz');

require('dotenv').config();
const cors = require('cors');

// Please explain Neil 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@cluster0.7bypk.mongodb.net/${process.env.MongoDB}?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection working");
});

app.listen(5000, () => {
    console.log('Online');
    console.log('mongodb+srv://${process.env.mongoUsername}:${process.env.mongoPassword}@cluster0.7bypk.mongodb.net/${process.env.MongoDB}?retryWrites=true&w=majority')
});
