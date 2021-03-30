import React, { useEffect, useState } from 'react';
import "./Leaderboard.css";
import axios from "axios";
import { nanoid } from "nanoid";

//use nano id to generate a random id for each result.
//axios is a promise based HTTP client for the browser and node.js, making it easy to 
//send async HTTP requests to REST endpoints and perform CRUD operations.

const Leaderboard = () => {
    //set results in leaderboard
    const [QuizResults, setResults] = useState([]);
    const [playerUsernameID] = useState([nanoid]);
    const [quizScoreID] = useState([nanoid]);
    const [quizCategoryID] = useState([nanoid]);
    const [quizDifficultyID] = useState([nanoid]);
    const [quizTypeID] = useState([nanoid]);

    //filtering categories/difficulty/type in leaderboard
    const [searchCategory, categoryFilter] = useState("");
    const [searchDifficulty, difficultyFilter] = useState("");
    const [searchType, quizTypeFilter] = useState("");


    // LOGIC
    // Need to create function that will collect results for each users
    // The table below has html tags with the options to fiter player results according to:
    // difficultyFilter, category and quiz type.
    // When any of these are changed, onChange our app should display the correct results in response to the change 

    const getQuizResults = async () => {
        await axios.post("user/leaderboard").then((res) => {
            setResults(res.data.result.flatMap((user) => {
                return user.results.map((results) => {
                    results.username = user.username;
                    return results
                })
            })
                .sort((QuizResults, results) => {
                    return results.quizScore - QuizResults.quizScore
                }));
        });
    };


    //if the number of results in the QuizResults array is 0, then the app will run the getQuizResults() function.
    //this will then collect the results to display in the table
    useEffect(() => {
        if (QuizResults.length === 0) {
            getQuizResults();
        }
        else {
            console.log(QuizResults);
        }
    })


    return (
        <div className="leaderboard-wrapper">
            <div className="leaderboard-title">
                <h1>Leaderboard</h1>
            </div>

            <div className="table-wrapper">
                <table className="leaderboard-table">
                    <th>
                        <h1>Player</h1>
                        <br></br>
                    </th>
                    <th>
                        <h1>Category</h1>
                        <br></br>
                        <input type="text" placeholder="Search..."
                            onChange={event => { categoryFilter(event.target.value) }}>
                            {/* on change of the search for a specific categoryy, add this to categoryFilter value */}
                        </input>
                    </th>
                    <th>
                        <h1>Quiz Type</h1>
                        <br></br>
                        <select name="Quiz-Type"
                            onChange={event => { quizTypeFilter(event.target.value) }}>
                            {/* on selection of a quiz type, place the value to the quizTypeFilter state value */}
                            <option value="" selected>Both</option>
                            <option value="trueFalse">True/False</option>
                            <option value="multipleChoice">Multiple Choice</option>
                        </select>
                    </th>
                    <th>
                        <h1>Difficulty</h1>
                        <br></br>
                        <select name="Difficulty"
                            onChange={event => { difficultyFilter(event.target.value) }}>
                            {/* on selection of a difficulty, place the value to the difficultyFilter state value */}
                            <option value="" selected>All</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </th>
                    <th>
                        <h1>Score</h1>
                        <br></br>
                    </th>


                    {/* 
                    table body to present each result
                    display a row for each quiz result.
                    define all the items needed for each column to display in a row. 
                    */}

                    <tbody>
                        {QuizResults.filter((results) => {
                        }).map((results) => (
                            <tr className="row-for-each-result">
                                <td className="row-display-user" key={playerUsernameID}>{results.username}</td>
                                <td className="row-display-category" key={quizCategoryID}>{results.category}</td>
                                <td className="row-display-difficulty" key={quizDifficultyID}>{results.difficulty}</td>
                                <td className="row-display-type" key={quizTypeID}>{results.quizType}</td>
                                <td className="row-display-score" key={quizScoreID}>{results.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leaderboard;