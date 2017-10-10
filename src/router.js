import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Store from './components/Store/Store.js';
import Details from './components/Details/Details.js';

import Checkout from './components/Checkout/Checkout.js';

export default (
    <Switch>
        <Route path='/' exact component={Store} />
        <Route path='/details/:id' component={Details} />
        <Route path='/checkout' component={Checkout} />
    </Switch>
)