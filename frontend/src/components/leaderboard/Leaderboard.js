import React, { useEffect, useState } from 'react';
import "./Leaderboard.css";
import axios from "axios";
import {nanoid} from "nanoid";

//use nano id to generate a random id for each result.
//axios is a promise based HTTP client for the browser and node.js, making it easy to 
    //send async HTTP requests to REST endpoints and perform CRUD operations.

const Leaderboard = () => {
    //set results in leaderboard
    const [QuizResults, setResults] = useState([]);
    const [playerUsername] = useState([nanoid]);
    const [quizScore] = useState([nanoid]);
    const [quizCategory] = useState([nanoid]);
    const [quizDifficulty] = useState([nanoid]);
    const [quizType] = useState([nanoid]);

    //filtering categories/difficulty/type in leaderboard
    const [searchCategory, categoryFilter] = useState("");
    const [searchDifficulty, difficultyFilter] = useState("");
    const [searchType, quizTypeFilter] = useState(""); 
    

// LOGIC

// Need to create function that will collect results for each users
// The table below has html tags with the options to fiter player results according to:
//     difficultyFilter, category and quiz type.
//     When any of these are changed, onChange our app should display the correct results in response to the change 


    return (
        <div className="leaderboard-wrapper">
            <div className="table-wrapper">
                <table className="leaderboard-table">
                    <th>
                        <h1>Player</h1>
                    </th>
                    <th>
                        <h1>Category</h1>
                        <br></br>
                        <input type="text" placeholder="Search..."></input>
                    </th>
                    <th>
                        <h1>Quiz Type</h1>
                        <br></br>
                        <select name="Quiz-Type">
                            <option value="" selected>Both</option>
                            <option value="trueFalse">True/False</option>
                            <option value="multipleChoice">Multiple Choice</option>
                        </select>
                    </th>
                    <th>
                        <h1>Difficulty</h1>
                        <br></br>
                        <select name="Difficulty">
                            <option value="" selected>All</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </th>
                    <th>
                        <h1>Score</h1>
                    </th>

                </table>
            </div>
        </div>
    )
}

export default Leaderboard;