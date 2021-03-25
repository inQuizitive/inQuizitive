import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import "./App.css";
import Footer from "./components/footer/Footer";
import Login from './components/login/Login';
import Quiz from './components/quiz/Quiz';
import About from "./components/about/About";

import ProfilePage from './components/profile/Profile';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-body">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/profile" component={ProfilePage} />
                    </Switch>
                    <div className="footer-body">
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
};
export default App;