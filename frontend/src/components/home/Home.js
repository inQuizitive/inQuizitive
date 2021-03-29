import React from 'react';
import Section from './HomeSection';
import './Home.css';
import { BrowserRouter } from 'react-router-dom';

function Home() {
    return (
        <BrowserRouter>
            <div className="home-container">

                <Section heading="Play a Round"
                    text="Test your knowledge - start a new quiz"
                    link="/quiz"
                    button="Start New Quiz" />
                
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
