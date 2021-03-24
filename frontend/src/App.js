import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Quiz from './components/quiz/Quiz';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="app-body">
                    <Switch>
                        <Route exact path="/quiz" component={Quiz} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
};
export default App;