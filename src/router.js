
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './routes/Home/Home.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />

    </Switch>
)
