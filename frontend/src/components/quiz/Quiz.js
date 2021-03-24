import React, { useEffect, useState } from "react";
import "./Quiz.css";
import axios from "axios";
import Question from "./Question";
import GameOver from "./GameOver";
import QuizSelection from "./QuizSelection";

function Quiz() {
  const [questions, setQuestions] = useState([]);  //array is empty as populated by the getQuestions function via the data variable
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [points, setPoints] = useState(0);
  const [url, setUrl] = useState("");
  // const [resultsSent, setResultsSent] = useState(false); //! can't find where this is being used for now
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");
//   const [type, setType] = useState("boolean");


  const getQuestions = async () => {
    let url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`;
    await axios
      .get(url)
      .then((res) => {
        let data = res.data.results.map((question) => {
          return {
            category: question.category,
            // type: question.type,
            difficulty: question.difficulty,
            question: question.question,
            answers: shuffle([
              ...question.incorrect_answers,
              question.correct_answer,
            ]),
            correctAnswer: question.correct_answer,
          };
        });
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (questions.length === 0 && quizStarted) {
      getQuestions();
    }
  });
// the start quiz function is linked from the button below
  const startQuiz = (event) => {
    event.preventDefault();
    event.target.style.display = "none";
    setQuizStarted(true);
  };
// shuffles the array of answers so the correct/incorrect answers are muddled
  const shuffle = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const playGame = () => {
    if (index === 10) {
        alert('you made it');
        setQuizStarted(false)
        setQuizEnded(true);
      return;
    }

    return (
      <div className="quizBeingPlayed">
        <div className="quizItems">
          {(questions[index]) ?
          <Question
            question={questions[index]}
            index={index}
            setIndex={setIndex}
            points={points}
            setPoints={setPoints}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
          />
          : "" }
        </div>
      </div>
    );
  };

  return (
    <div className="quizWrapper">
      {(quizEnded) ? <GameOver 
            points={points}  
            difficulty = {difficulty}
            category = {category}
            setQuizStarted = {setQuizStarted}
            quizEnded = {quizEnded}
             
          /> :
        <>
          {(quizStarted && !quizEnded) ? playGame() : //quiz started and not quiz ended - run playing game
          <div className="quizData">
              <QuizSelection 
                url = {url}
                setUrl = {setUrl}
                difficulty = {difficulty}
                setDifficulty = {setDifficulty}
                category = {category}
                setCategory = {setCategory}
              />
              <button id="startQuiz" value="startQuiz" onClick={startQuiz}>
                Be inQuizitive!!
              </button>
           </div>
          } 
        </>
      }
  
    </div>
  );
}

export default Quiz;