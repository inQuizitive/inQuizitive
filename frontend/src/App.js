import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from "./components/footer/Footer";
import "./App.css";
import Login from './components/login/Login';
import Quiz from './components/quiz/Quiz';
import About from "./components/about/About";
import SignUp from './components/signup/Signup';
import Faqs from "./components/faq/Faq";
import Navbar from './components/navbar/Navbar';
import ProfilePage from './components/profile/Profile';
import PageNotFound from './components/pageNotFound/PageNotFound';
import DeleteAccount from './components/deleteAccount/DeleteAccount';
import Leaderboard from "./components/leaderboard/Leaderboard";
import History from "./components/history/History";

function App() {

    const user = { 
        userName: sessionStorage.getItem("username"),
        email: sessionStorage.getItem("email"),
        userId: sessionStorage.getItem("userID")
    }

    return (
        <div className="App">
            <Router>
                <div className="app-body">
                    <Navbar user={user}/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/quiz" component={Quiz} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/profile" component={ProfilePage} />
                        <Route exact path="/frequently-asked-questions" component={Faqs} />
                        <Route exact path="/delete" component={DeleteAccount} />
                        <Route exact path="/leaderboard" component={Leaderboard} />
                        <Route exact path="/history" component={History} />
                        <Route component={PageNotFound} />

                    </Switch>
                </div>
                <div className="footer-body">
                    <footer className="app-footer">
                        <Footer />
                    </footer>
                </div>

            </Router>
        </div>
    )
};
export default App;