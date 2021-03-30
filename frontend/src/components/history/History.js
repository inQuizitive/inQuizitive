import React, { useEffect, useReducer, useState } from 'react';
import "./History.css"


// LOGIC
// TABLE TO SHOW A SPECIFIC PLAYERS SCORES
// IF THERE ARE NO SCORES FOR THAT USER, ADD A LINK TO DIRECT USERS TO PLAY THEIR FIRST QUIZ
// ADD FILTERS SO USERS CAN FILTER THROUGH THEIR RESULTS
// FILTER BY CATEGORY, DIFFICULTY, QUIZ TYPE

const History = () => {
    return(
        <div className="history-page-wrapper">
            <div className="history-title">
                <h1>User History</h1>
            </div>
            <div className="history-username-title">
                {/* ADD LOGGEDIN USERNAME HERE */}
            </div>

            <div className="history-table-wrapper">
                <table className="history-table">
                    <th>
                        <h1>Category</h1>
                        <br></br>
                        <input type="text" placeholder="Search..."></input>
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
                        <h1>Quiz Type</h1>
                        <br></br>
                        <select name="Quiz-Type">
                            <option value="" selected>Both</option>
                            <option value="trueFalse">True/False</option>
                            <option value="multipleChoice">Multiple Choice</option>
                        </select>
                    </th>
                    <th>
                        <h1>Score</h1>
                        <br></br>
                    </th>
                </table>
            </div>
        </div>
    )
}

export default History;