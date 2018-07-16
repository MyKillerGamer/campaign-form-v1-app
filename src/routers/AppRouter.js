import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AckermansPage from '../components/AckermansPage';
import PepMoneyPage from '../components/PepMoneyPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={DashboardPage} exact={true}/>
            <PrivateRoute path="/dashboard/ackermans" component={AckermansPage} exact={true} />
            <PrivateRoute path="/dashboard/pepmoney" component={PepMoneyPage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>

);

export default AppRouter;