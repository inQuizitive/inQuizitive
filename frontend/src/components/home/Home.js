import React from 'react';
import Section from './HomeSection';
import './Home.css';
import { BrowserRouter } from 'react-router-dom';

function Home() {
    return (
        <BrowserRouter>
            <div className="home-container">

                <Section
                    heading="Check the Leaderboard!"
                    text="How competitive are you? See how you are doing against others!"
                    link="/leaderboard"
                    button="Leaderboard"
                />

                <Section 
                    heading="Try Another Quiz!"
                    text="Test your knowledge - start a new quiz"
                    link="/quiz"
                    button="Start New Quiz" 
                />
                
                <Section 
                    heading="Check Your History!"
                    text="Check Your Results: How are you doing?"
                    link="/history"
                    button="Results"
                />



                {/* we do not need this random quiz card until we add the functionality to start a random quiz for a user */}
                {/* <Section heading="Random Quiz"
                    text="I don't care just give me my quiz fix!"
                    link="/quiz"
                    button="Get InQuizitive" /> */}
            </div>
        </BrowserRouter>
    )
}

export default Home;
