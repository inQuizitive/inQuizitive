import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import "./App.css";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
import Quiz from './components/quiz/Quiz';
import About from "./components/about/About";
import SignUp from './components/signup/Signup';

import ProfilePage from './components/profile/Profile';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-body">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/about" component={About} />
<<<<<<< Updated upstream
                        <Route exact path="/profile" component={ProfilePage} />
                    </Switch>
                    <div className="footer-body">
=======
                    </Switch>   
                </div>
                <div className="footer-body">
                    <footer className="app-footer">
>>>>>>> Stashed changes
                        <Footer />
                    </footer>
                </div>
            </BrowserRouter>
        </div>
    )
};
export default App;