import React from "react";
import Replacer from "../../lib/Replacer";

function Question(props) {
  const clickAnswer = (event) => {
    props.setIndex(1 + props.index);
    props.setTimeLeft(30);
    if (event.target.value === props.question.correctAnswer) {
      questionCorrect();
    } else {
      questionIncorrect();
    }
    console.log(props.points);
  };

  const questionCorrect = () => {
    if (props.timeLeft >= 0) {
      props.setIndex(props.index + 1);
      props.setPoints(props.points + 10);
      alert("Correct");
    }
  };

  const questionIncorrect = () => {
    if (props.timeLeft >= 0) {
      props.setIndex(props.index + 1);
      alert(
        `Incorrect The correct answer was: ${props.question.correctAnswer}`
      );
    }
  };
  
  return (
    <div>
      <h1>{Replacer(props.question.question)}</h1>
     <h2 className="q-category">
                    {props.question.category}
                </h2>
                <h2 className="q-difficulty">
                    Difficulty: <span>{props.question.difficulty}</span>
                </h2>
      <div className="allAnswers">
        {props.question.answers.map((answer, answerID) => (
          <div className="each-answer-button">
            <button
              className="answer-button"
              key={answerID}
              onClick={clickAnswer}
              value={Replacer(answer)}
            >
              {" "}
              {Replacer(answer)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
