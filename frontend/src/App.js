import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import Footer from "./components/footer/Footer";

import Quiz from './components/quiz/Quiz';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-body">
                    <Switch>
                        <Route exact path="/quiz" component={Quiz} />
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