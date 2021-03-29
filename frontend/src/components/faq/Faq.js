import "./Faq.css";

const Faqs = () => {
    return(
        <div className="FAQs-wrapper">
            <div className="FAQs-title">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="FAQs-content">
                <div className="FAQs-question">
                    <h6>How Do I Play a Quiz?</h6>
                    <p>You can play a quiz at any time by visiting the following <a href="/quiz">website</a>, then selecting a difficulty, quiz type (multiple choice or true/false) and also category!</p>
                </div>
                <br></br>
                <div className="FAQs-question">
                    <h6>Why Can I Not See My Results On The Leaderboard?</h6>
                    <p>You will not be able to save your scores to the leaderboard (or your history!) if you have not created an account and or in when you complete a quiz. So follow either of these links if you want to <a href="/signup">sign up</a> or <a href="/login">log in</a>.</p>
                </div>
                <br></br>
                <div className="FAQs-question">
                    <h6>How Can I See My Own Results?</h6>
                    <p>You can see a list of your own results if you visit your profile's <a href="/history">history</a> page!</p>
                </div>
                <br></br>
                <div className="FAQs-question">
                    <h6>How Does in<span>Quiz</span>itive's Leaderboard Work?</h6>
                    <p>Our <a href="/leaderboard">leaderboard</a> shows a list of player results from highest to lowest. Using any filtering options at the top of the leaderboard, you can see the top results for different categories, difficulties and quiz types!</p>
                </div>
                <br></br>
                <div className="FAQs-question">
                    <h6>Developers: Where Can I Find The Code For This AMAZING Application?</h6>
                    <p>You can find our teams code on <a href="https://github.com/inQuizitive/inQuizitive">GitHub</a>.</p>
                </div>
                <br></br>
            </div>
        </div>
    )
}
export default Faqs;