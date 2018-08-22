import React from 'react';
import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CampaignDashboardPage from '../components/CampaignDashboardPage';
import AddCampaignPage from '../components/AddCampaignPage';
import EditCampaignPage from '../components/EditCampaignPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={CampaignDashboardPage} />
            <PrivateRoute path="/create" component={AddCampaignPage} />
            <PrivateRoute path="/edit/:id" component={EditCampaignPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>

);

export default AppRouter;