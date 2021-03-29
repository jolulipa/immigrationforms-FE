import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navigation from './components/navigation';
import I130 from "./forms/I130";
import LandingPage from './screens/LandingPage';
import N400 from "./forms/N400";

function App() {
    return <Router>
        <Navigation/>
        <Switch>
            <Route path="/forms/i130">
                <I130/>
            </Route>
            <Route path="/forms/n400">
                <N400/>
            </Route>
            <Route path="/">
                <LandingPage/>
            </Route>
        </Switch>
    </Router>;
}

export default App;
