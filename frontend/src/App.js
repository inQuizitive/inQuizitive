import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login/Login';
import Quiz from './components/quiz/Quiz';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-body">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/quiz" component={Quiz} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
};
export default App;