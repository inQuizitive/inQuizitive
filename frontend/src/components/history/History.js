import React, { useEffect, useState } from "react";
import "./History.css";
import axios from "axios";
import { nanoid } from "nanoid";

// LOGIC
// TABLE TO SHOW A SPECIFIC PLAYERS SCORES
// IF THERE ARE NO SCORES FOR THAT USER, ADD A LINK TO DIRECT USERS TO PLAY THEIR FIRST QUIZ
// ADD FILTERS SO USERS CAN FILTER THROUGH THEIR RESULTS
// FILTER BY CATEGORY, DIFFICULTY, QUIZ TYPE

const History = () => {
  //set results in history table
  const [QuizResults, setResults] = useState([]);

  const [quizScoreID] = useState(nanoid);
  const [quizCategoryID] = useState(nanoid);
  const [quizDifficultyID] = useState(nanoid);
  const [quizTypeID] = useState(nanoid);

  // filtering categories, difficulty and type in history table
  const [searchCategory, categoryFilter] = useState("");
  const [searchDifficulty, difficultyFilter] = useState("");
  const [searchType, quizTypeFilter] = useState("");

  //run if QuizResults.length is 0 in useEffect function
  const getAUsersResults = async () => {
    let userID = sessionStorage.getItem("userID");

    await axios
      .post("http://localhost:5000/results/user", { id: userID })
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //if the number of results in the QuizResults array is 0, then the app will run the below function.
  //this will then collect the results to display
  useEffect(() => {
    if (QuizResults.length === 0) {
      getAUsersResults();
    } else {
      console.log(QuizResults);
    }
  });

  return (
    <div className="history-page-wrapper">
      <h1 className="history-title">User History</h1>
      {/* <div className="history-username-title">
                <h1>Username: {username}</h1>
            </div> */}

      <div className="history-table-wrapper">
        <table className="history-table">
          <th>
            <h1>Category</h1>
            <br></br>
          </th>
          <th>
            <h1>Quiz Type</h1>
            <br></br>
            <select
              name="Quiz-Type"
              onChange={(event) => {
                quizTypeFilter(event.target.value);
              }}
            >
              {/* on selection of a quiz type, place the value to the quizTypeFilter state value */}
              <option value="" selected>
                Both
              </option>
              <option value="boolean">True/False</option>
              <option value="multiple">Multiple Choice</option>
            </select>
          </th>
          <th>
            <h1>Difficulty</h1>
            <br></br>
            <select
              name="Difficulty"
              onChange={(event) => {
                difficultyFilter(event.target.value);
              }}
            >
              <option value="" selected>
                All
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </th>
          <th>
            <h1>Score</h1>
            <br></br>
          </th>

          <tbody>
            {QuizResults.length ? (
              ""
            ) : (
              <h2 className="no-saved-results">
                You Have No Saved Results!{" "}
                <a href="/quiz">
                  Start in<span>Quiz</span>itive here!
                </a>
              </h2>
            )}

            {QuizResults.filter((results) => {
              // if only searching for type
              if (
                results.quizType
                  .toLowerCase()
                  .includes(searchType.toLowerCase()) &&
                !searchDifficulty &&
                !searchCategory
              ) {
                return results;
              }
              // if only filtering for difficulty
              else if (
                !searchType &&
                results.difficulty
                  .toLowerCase()
                  .includes(searchDifficulty.toLowerCase()) &&
                !searchCategory
              ) {
                return results;
              }
              // if filtering for only for category
              else if (
                !searchType &&
                !searchDifficulty &&
                results.category
                  .toLowerCase()
                  .includes(searchCategory.toLowerCase())
              ) {
                return results;
              }
              // if filtering for both type and difficulty
              else if (
                !searchCategory &&
                results.difficulty
                  .toLowerCase()
                  .includes(searchDifficulty.toLowerCase()) &&
                results.quizType.toLowerCase().includes(searchType.toLowerCase)
              ) {
                return results;
              }
              // if filtering for both type and category
              else if (
                !searchDifficulty &&
                results.quizType
                  .toLowerCase()
                  .includes(searchType.toLowerCase()) &&
                results.category
                  .toLowerCase()
                  .includes(searchCategory.toLowerCase())
              ) {
                return results;
              }
              // if filtering for both difficulty and category
              else if (
                !searchType &&
                results.category
                  .toLowerCase()
                  .includes(searchCategory.toLowerCase()) &&
                results.difficulty
                  .toLowerCase()
                  .includes(searchDifficulty.toLowerCase())
              ) {
                return results;
              }
              //if filtering for all 3 (difficulty, type, category)
              else if (
                results.category
                  .toLowerCase()
                  .includes(searchCategory.toLowerCase()) &&
                results.quizType
                  .toLowerCase()
                  .includes(searchType.toLowerCase()) &&
                results.difficulty
                  .toLowerCase()
                  .includes(searchDifficulty.toLowerCase())
              ) {
                return results;
              }
              //if filtering for none of the columns
              else if (!searchCategory && !searchDifficulty && !searchType) {
                return results;
              }
            }).map((results) => (
              <tr className="row-for-each-result">
                <td className="row-display-category" key={quizCategoryID}>
                  {results.category
                    .replace(9, "General Knowledge")
                    .replace(10, "Entertainment: Books")
                    .replace(11, "Entertainment: Film")
                    .replace(12, "Entertainment: Music")
                    .replace(13, "Musicals & Theatres")
                    .replace(14, "Entertainment: Television")
                    .replace(15, "Entertainment: Video Games")
                    .replace(16, "Entertainment: Board Games")
                    .replace(17, "Science & Nature")
                    .replace(18, "Science: Computers")
                    .replace(19, "Science: Mathematics")
                    .replace(20, "Mythology")
                    .replace(21, "Sports")
                    .replace(22, "Geography")
                    .replace(23, "History")
                    .replace(24, "Politics")
                    .replace(25, "Art")
                    .replace(26, "Celebrities")
                    .replace(27, "Animals")
                    .replace(28, "Vehicles")
                    .replace(29, "Entertainment: Comics")
                    .replace(30, "Science: Gadgets")
                    .replace(31, "Japanese Anime & Manga")
                    .replace(32, "Entertainment: Cartoon & Animations")}
                </td>
                <td className="row-display-type" key={quizTypeID}>
                  {results.quizType
                    .replace("boolean", "True/False")
                    .replace("multiple", "Multiple Choice")}
                </td>
                <td className="row-display-difficulty" key={quizDifficultyID}>
                  {results.difficulty
                    .replace("easy", "Easy")
                    .replace("medium", "Medium")
                    .replace("hard", "Hard")}
                </td>
                <td className="row-display-score" key={quizScoreID}>
                  {results.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
