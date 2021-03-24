import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

function GameOver(props) {

    let history = useHistory();

    const saveResults = async () => {
        console.log(props)
        await axios.post('api/results/save', {
            userID: sessionStorage.getItem('userID'),
            username: sessionStorage.getItem('username'),
            points: props.points,
            category: props.category,
            quizType: props.type,
            difficulty: props.difficulty,
            quizTakenAt: Date.now()
        }).then((res) => {
            if (res.data.status == 'OK') {
                alert("Results added to user history and leaderboard!");
            }
            else {
                alert("Error saving results. Sorry, please try again..");
            }
        }).catch ((err) => {
            console.log(err)
        })
    }

    const restartQuiz = (event) => {
        history.go(0)
        props.setQuizStarted(false);
    }

setTimeout(saveResults, 2500);


return (
    <div className="game-over-container">
        <span className="neon-text">Game Over!</span>
        <div className="restart-quiz-container">
            <button id="restartQuiz" value="restartQuiz" onClick={restartQuiz}>Play another round?</button>
        </div>
    </div>
)
}

export default GameOver;