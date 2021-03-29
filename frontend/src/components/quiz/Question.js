import React from "react";
import Replacer from "../../lib/Replacer";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Yay!",
        text: "That is the correct answer!",
        imageUrl: "https://media.giphy.com/media/FlWgXEtj5aM5G/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  };

  const questionIncorrect = () => {
    if (props.timeLeft >= 0) {
      props.setIndex(props.index + 1);
      Swal.fire({
        title: "Uh Oh!",
        text: `That is the incorrect answer! The correct answer is: '${props.question.correctAnswer}'.`,
        imageUrl: "https://media.giphy.com/media/xUPJPzcdlbvaFUrF7y/giphy.gif",
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    }
  };

  return (
    <div className="q-wrapper">
      <div className="quiz-details">
        <div className="q-details">
          <h2 className="q-category">{props.question.category}</h2>
          <h2 className="q-difficulty">
            Difficulty: <span>{props.question.difficulty}</span>
          </h2>
        </div>
        <h2 className="question">
          {props.index + 1}: {Replacer(props.question.question)}
        </h2>
      </div>
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
