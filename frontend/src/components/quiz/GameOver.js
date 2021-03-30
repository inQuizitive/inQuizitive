import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./GameOver.css";

function GameOver(props) {

    let history = useHistory();




    const saveResults = async () => {

        const data = {
            quizUser: sessionStorage.getItem('userID'),
            score: props.score,
            category: props.category,
            quizType: props.quizType,
            difficulty: props.difficulty,
            quizDateTime: new Date()
        }

        await axios.post('http://localhost:5000/results/save', data).then((res) => {
            console.log(res.data)
            if (res.status === 200) {
                alert("Results added to user history and leaderboard!");
                console.log("Yes")
            }
            else {
                alert("Error saving results. Sorry, please try again..");
                console.log("Nope")
            }
        }).catch((err) => {
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
            <div className="game-over-title">
                <h1 id="go-title">Game Over!</h1>
            </div>
            <div className="game-over-content">
                <h2 id="what-score">Your Score was: <span >{props.score}</span>!</h2>
                <h3 id="press-restart-button">Please press the button below to play again!</h3>
            </div>

            <div className="restart-quiz-container">
                <button id="restartQuiz" value="restartQuiz" onClick={restartQuiz}>Play in<span>Quiz</span>itive Again!</button>
            </div>
        </div>
    )
}

export default GameOver;