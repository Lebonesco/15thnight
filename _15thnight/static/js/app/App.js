import React from 'react';
import {render} from 'react-dom';
import Chart from './Chart';
import Advocate from './Advocate';
import { Router, Route } from 'react-router';
import {hashHistory} from 'react-router';


render((
    <Router history={hashHistory}>
            <Route path="/" component={Chart}/>
            <Route path="/advocate_test" component={Advocate}/>
            <Route path="/analytics" component={Chart}/>
    </Router>
    ), document.getElementById('root'));

