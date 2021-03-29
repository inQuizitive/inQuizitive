import "./About.css";

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-title">
                <h1>About us</h1>
            </div>
            <div className="about-content">
                <p>in<span>Quiz</span>itive is a simple yet funky designed, multiple choice quiz application with a huge range of categories and questions!</p>
                <p>Create an account and save your results, then you will be able to see your scores on our leaderboard!</p>
                <p>We need you to be in<span>Quiz</span>itive, and enjoy your experience!</p>
                <p>This application has been handcrafted by <a href="https://github.com/evanmorrisdev" target="_blank">Evan</a>, <a href="https://github.com/LRWright" target="_blank">Le-Ann</a>, <a href="https://github.com/lisarawlings" target="_blank">Lisa</a> and <a href="https://github.com/ruarplum" target="_blank">Ruaraidh!</a></p>
                <p>Developers: Check out our code <a href="https://github.com/inQuizitive/inQuizitive" target="_blank">here</a></p>
            </div>
        </div>
    )
}
export default About;