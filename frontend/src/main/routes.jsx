import React from "react";
import { Switch, Route, Redirect } from "react-router";
//import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";

import AuthOrApp from './authOrApp'
import App from './app'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)