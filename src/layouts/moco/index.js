import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from '../../redux';

import './index.scss';

// pages
const MocoPage = React.lazy(() => import('./MocoLayout'));
const LoginPage = React.lazy(() => import('../../views/pages/Login'));
const RegisterPage = React.lazy(() => import('../../views/pages/Register'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const ProtectedRoute = () => {
    const { auth = {} } = store.getState();
    const { attributes = {} } = auth;

    return (
        <Route
            render={props => attributes.accessToken
                ? <MocoPage {...props} />
                : <Redirect to={{ pathname: "/login" }} />}
        />
    )
};

const App = () => {
    return (
        <Router>
            <React.Suspense fallback={loading()}>
                <Switch>
                    <Route exact path="/login" name="Login Page" render={props => <LoginPage {...props} />} />
                    <Route exact path="/register" name="Register Page" render={props => <RegisterPage {...props} />} />
                    <ProtectedRoute path="/" />
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default App;
