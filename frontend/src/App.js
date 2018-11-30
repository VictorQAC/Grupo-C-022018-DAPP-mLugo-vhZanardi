import React, { Component } from 'react';
import logo from './logo_subastas.png';
import './App.css';
import './Button.css';
import './css/template.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import AuctionList from './componet/AuctionList';
import AuctionCreate from './componet/AuctionCreate';
import AuctionMap from './componet/AuctionMap';
import AuctionDetail from './componet/AuctionDetail';
import { BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import { translate} from 'react-i18next';
import DropdownButton from './componet/DropdownButton';
import { Navbar, Button } from 'react-bootstrap';
import Login from "./componet/Login";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:{},
            nickNameLogin: undefined
        };
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    componentWillReceiveProps() {

        this.setState({ profile: {} });
        const { userProfile, getProfile } = this.props.auth;
        if (!userProfile) {
            getProfile((err, profile) => {
                this.setState({ profile });
                this.setState({ nickNameLogin: profile.nickname});
            });
        } else {
            this.setState({ profile: userProfile });
            this.setState({ nickNameLogin: userProfile.nickname});
        }

        console.log(this.state);

        //ACA LE PASARIA A LA URL EL nickNameLogin
        fetch('/api/userBy/blabla')
            .then(response => response.json())
            .then(data => this.setState({user: data}));
    }

  render() {
    const { isAuthenticated} = this.props.auth;
      const { profile } = this.state;
          return (
              <BrowserRouter>
              <div>
                  <meta charSet="utf-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                  <meta name="description" content />
                  <meta name="author" content />
                  {/* Bootstrap core CSS */}
                  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                  {/* Custom styles for this template */}
                  <link href="css/template.css" rel="stylesheet" />
                  {/* Navigation */}
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                      <div className="container">
                          {isAuthenticated() && (
                              <a className="navbar-brand" href="/home">SubastARG</a>
                          )}
                          {!isAuthenticated() && (
                              <a className="navbar-brand" href="/home">SubastARG</a>
                          )
                          }
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon" />
                          </button>
                          <div className="collapse navbar-collapse" id="navbarResponsive">
                              <ul className="navbar-nav ml-auto">
                                  <li className="nav-item active">
                                      {isAuthenticated() && (
                                          <a className="nav-link" href="/home">Home</a>
                                      )}
                                    {!isAuthenticated() && (
                                        <a className="nav-link" href="/home">Home</a>
                                        )
                                      }
                                  <span className="sr-only">(current)</span>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">About</a>
                                  </li>
                                  <li className="nav-item">
                                      {
                                          !isAuthenticated() && (
                                              <Button
                                                  id="qsLoginBtn"
                                                  bsStyle="primary"
                                                  className="btn-margin"
                                                  onClick={this.login.bind(this)}
                                              >
                                                  Log In
                                              </Button>
                                          )
                                      }
                                  </li>
                                  <li className="nav-item">
                                      {
                                          isAuthenticated() && (
                                              <Button
                                                  id="qsLogoutBtn"
                                                  bsStyle="primary"
                                                  className="btn-margin"
                                                  onClick={this.logout.bind(this)}
                                              >
                                                  Log Out
                                              </Button>
                                          )
                                      }
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div><DropdownButton/></div>
                  </nav>
                  {/* Page Content */}
                  <div className="container">
                      {/* Jumbotron Header */}

                          {isAuthenticated() && this.state.user != null && (
                              <Redirect
                                  from = ""
                                  to="/home"
                              />
                          )}

                      {isAuthenticated() && this.state.user == null && (
                          <Redirect
                              from = ""
                              to="/login"
                          />
                      )}

                      <Switch>
                          <Route
                              path="/login"
                              render={() => <Login/>} />
                      </Switch>

                      <Switch>
                          <Route
                              path="/home"
                              render={() => <AuctionList/>} />
                      </Switch>

                      <Switch>
                          <Route
                              path="/auctionDetail/:id"
                              render={(props) => <AuctionDetail {...props} />} />
                      </Switch>

                      <Switch>
                          <Route
                              path="/auctionCreate"
                              render={() => <AuctionCreate/>} />
                      </Switch>

                  </div>

                  {/* Footer */}
                  <footer className="py-5 bg-dark">
                      <div className="container">
                          <p className="m-0 text-center text-white">Copyright © SubastARG 2018</p>
                      </div>
                      {/* /.container */}
                  </footer>
                  {/* Bootstrap core JavaScript */}
              </div>
          </BrowserRouter>
      );
   }

}

export default translate('common')(App);

//export default App;