import React from 'react';
import {BrowserRouter as  Router, Switch, Route } from 'react-router-dom';

import LayoutSite from './LayoutSite';
import HomePage from './HomePage';
import InfoPage from './InfoPage';
import GraphPage from './GraphPage';

import 'antd/dist/antd.css';
import './../assets/layout.css';

const App = () => {
    return (
        <Router>
            <LayoutSite>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/informacion" component={InfoPage} />
                    <Route exact path="/grafica" component={GraphPage} />
                </Switch>
            </LayoutSite>
        </Router>
    );
};

export default App;