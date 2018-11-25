import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import App from './App';
import Callback from './Callback/Callback';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import Profile from './Profile/Profile';
import history from './history';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import AuctionDetail from "./componet/AuctionDetail";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

export const makeMainRoutes = () => {
    return (
        <Router history={history} component={App}>
            <div>
                <Route path="/" render={(props) => <I18nextProvider i18n={i18next}><App auth={auth} {...props}/></I18nextProvider>} />
                <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
                <Route path="/profile" render={(props) => (
                    !auth.isAuthenticated() ? (
                        <Redirect to="/home"/>
                    ) : (
                        <Profile auth={auth} {...props} />
                    )
                )} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </Router>
    );
};
