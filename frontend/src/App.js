import React, { Component } from 'react';
import logo from './logo_subastas.png';
import './App.css';
import './Button.css';
import './css/template.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import BackgroundImage from 'react-background-image-loader';

import AuctionList from './componet/AuctionList';
import AuctionCreate from './componet/AuctionCreate';
import AuctionMap from './componet/AuctionMap';
import { translate, Trans } from 'react-i18next'

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + "http://simpleauctionsite.com/images/slide1.jpg" + ")"
};

class App extends Component {
    render() {
        const {i18n} = this.props;
        return (
                /*<div className="App">
                    <header className="App-header">
                  <div style={{marginLeft:1220}}>
                    <button onClick={() => i18n.changeLanguage('es')} style={{backgroundColor:"#1fc7ff",marginTop:0,marginRight:10}}>Español
                    </button>
                      <button className="Button-style" onClick={() => i18n.changeLanguage('en')} style={{backgroundColor:"#1fc7ff",marginTop:0}}>English
                      </button>
                  </div>*/
                    /*<img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">
                        {this.props.t('welcome.title', {framework: "react-i18next"})}
                    </h1>
                    <p>
                        <Trans i18nKey='welcome.intro'>
                            Edit <code>src/App.js</code> and save to reload.
                        </Trans>
                    </p>
                    </header>
                    <AuctionCreate/>
                    <br/>
                    <br/>
                    <AuctionList/>
                    <br/>
                    <AuctionMap/>*/
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
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page Content */}
                <div className="container">
                     {/* Jumbotron Header */}
                    <header className="jumbotron my-4" style={sectionStyle}>
                        <h1 className="display-3">
                            {this.props.t('welcome.title')}</h1>
                        <p className="lead">
                        <Trans i18nKey='welcome.intro'>intro</Trans>
                        </p>
                        <a href="#" className="btn btn-primary btn-lg">Create Auction</a>
                    </header>
                    {/* Page Features */}
                    <AuctionList/>
                    {/* /.container */}
                </div>
                {/* Footer */}
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright © CrazyAuction 2018</p>
                    </div>
                    {/* /.container */}
                </footer>
                {/* Bootstrap core JavaScript */}
            </div>
        );
    }
}


export default translate('common')(App);
// export default App;