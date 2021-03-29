import React from 'react';
import Replacer from '../../lib/Replacer';

function Question(props) {

    const clickAnswer = (event) => {
        props.setIndex(1 + props.index);
        props.setTimeLeft(30);
        if (event.target.value === props.question.correctAnswer) {
            questionCorrect();
        } else {
            questionIncorrect();
        }
        console.log(props.points)
    }

    const questionCorrect = () => {
        if (props.timeLeft >= 0) {
            props.setIndex(props.index + 1);
            props.setPoints(props.points + 10)
            alert('Correct');
        }
    };

    const questionIncorrect = () => {
        if (props.timeLeft >= 0) {
        props.setIndex(props.index + 1);
        alert(`Incorrect The correct answer was: ${props.question.correctAnswer}`);    
        }
    };

    return (
        
<<<<<<< Updated upstream
        <div className="q-wrapper">
            <div className="quiz-details">
                <h2 className="q-category">
                    {props.question.category}
                </h2>
                <h2 className="q-difficulty">
                    Difficulty: {props.question.difficulty}
                </h2>
             </div>
            <h3 className="question">
                {(props.index) + 1}: {props.question.question.replace('&#039;', "'")
                .replace('&#O39', "'")
                .replace('&quot;', '"')
                .replace('&QUOT;', '"')
                .replace('&qu0t;','"')
                .replace('&ecirc;', 'ê')
                .replace('&ndash;', '-')
                .replace('&ldquo;', '"')
                .replace('&rdquo;', '"')
                .replace('&eacute;', 'é')
                .replace('&ocirc;', 'ô')
                .replace('&uuml;', 'ü')
                .replace('&Uuml;', 'Ü')
                }
            </h3>
            
=======
         <div>
             <h1>
                 {Replacer(props.question.question)}</h1>
            <h2 className="category-difficulty">
              {props.question.category} | {props.question.difficulty}
            </h2>
>>>>>>> Stashed changes
            <div className="allAnswers">              
                {props.question.answers.map((answer, answerID) => (
                    <div className="each-answer-button">
                        <button
                        className = "answer-button" 
                        key = {answerID}
                        onClick = {clickAnswer}
<<<<<<< Updated upstream
                        value = {answer}
                        >  {answer} 
                        </button>
                    </div>                     
=======
                        value = {Replacer(answer)}
                    >  {Replacer(answer)} 
                    </button> 
>>>>>>> Stashed changes
                ))}
            </div>
         </div>
    )
}

export default Question;
