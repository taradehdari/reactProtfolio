import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
)

export default Main;