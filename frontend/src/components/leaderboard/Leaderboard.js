import React, { useEffect, useState } from "react";
import "./Leaderboard.css";
import axios from "axios";
import { nanoid } from "nanoid";

//use nano id to generate a random id for each result.
//axios is a promise based HTTP client for the browser and node.js, making it easy to
//send async HTTP requests to REST endpoints and perform CRUD operations.

const Leaderboard = () => {
  //set results in leaderboard
  const [QuizResults, setResults] = useState([]);

  const [playerUsernameID] = useState(nanoid);
  const [quizScoreID] = useState(nanoid);
  const [quizCategoryID] = useState(nanoid);
  const [quizDifficultyID] = useState(nanoid);
  const [quizTypeID] = useState(nanoid);

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
    await axios.post("http://localhost:5000/users/leaderboard").then((res) => {
      setResults(
        res.data.results
          .flatMap((user) => {
            return user.results.map((result) => {
              result.username = user.username;
              result.difficulty = result.difficulty
                .replace("easy", "Easy")
                .replace("medium", "Medium")
                .replace("hard", "Hard");
              result.quizType = result.quizType
                .replace("boolean", "True/False")
                .replace("multiple", "Multiple Choice");
              result.category = result.category
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
                .replace(32, "Entertainment: Cartoon & Animations");
              return result;
            });
          })
          .sort((QuizResults, results) => {
            return results.score - QuizResults.score;
          })
      );
    });
  };

  //if the number of results in the QuizResults array is 0, then the app will run the getQuizResults() function.
  //this will then collect the results to display in the table
  useEffect(() => {
    if (QuizResults.length === 0) {
      getQuizResults();
    } else {
      console.log(QuizResults);
    }
  });

  return (
    <div className="leaderboard-wrapper">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="table-wrapper">
        <table className="leaderboard-table">
          <th>
            <h1>Player</h1>
            <br></br>
          </th>
          <th>
            <h1>Category</h1>
            <br></br>
            <input
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                categoryFilter(event.target.value);
              }}
            ></input>
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
              <option value="True/False">True/False</option>
              <option value="Multiple Choice">Multiple Choice</option>
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
              {/* on selection of a difficulty, place the value to the difficultyFilter state value */}
              <option value="" selected>
                All
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </th>
          <th>
            <h1>Score</h1>
            <br></br>
          </th>

          <tbody>
            {/* WE NEED TO FILTER THESE IN AN ORDER TO PRESENT THE CORRECT RESULTS
WE NEED TO ADD THE FILTERS FOR JUST ONE COLUMN FIRST
THEN 2 COLUMNS
THEN ALL 3 COLUMNS
IF WE ADDED THE FUNCTION TO SHOW RESULTS FOR ALL 3 FIRST, THEN WE WOULD NEVER FILTER FOR THE REST */}

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
                <td className="row-display-user" key={playerUsernameID}>
                  {results.username}
                </td>
                <td className="row-display-category" key={quizCategoryID}>
                  {results.category}
                </td>
                <td className="row-display-type" key={quizTypeID}>
                  {results.quizType}
                </td>
                <td className="row-display-difficulty" key={quizDifficultyID}>
                  {results.difficulty}
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

export default Leaderboard;
