import React, { Component } from 'react';
import logo from './logo_subastas.png';
import './App.css';
import './Button.css';
import './css/shop-item.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';

import AuctionList from './componet/AuctionList';
import AuctionCreate from './componet/AuctionCreate';
import AuctionMap from './componet/AuctionMap';
import { translate, Trans } from 'react-i18next'

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
                <title>Bootstrap Example</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                <style dangerouslySetInnerHTML={{__html: "\n    /* Remove the navbar's default rounded borders and increase the bottom margin */ \n    .navbar {\n      margin-bottom: 50px;\n      border-radius: 0;\n    }\n    \n    /* Remove the jumbotron's default bottom margin */ \n     .jumbotron {\n      margin-bottom: 0;\n    }\n   \n    /* Add a gray background color and some padding to the footer */\n    footer {\n      background-color: #f2f2f2;\n      padding: 25px;\n    }\n  " }} />
                <nav className="navbar navbar-inverse" style={{marginTop:-60}}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li style={{marginLeft: -10}}><img src={logo} className="App-logo"/></li>
                                <li className="active" style={{marginLeft: 60, marginTop:-45}}><a href="#">Home</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" style={{marginLeft: 50}}>
                                <li><a href="#"><span className="glyphicon glyphicon-user" /> Your Account</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <img src="http://simpleauctionsite.com/images/slide1.jpg"/>
                    <h1 className="App-title">
                        {this.props.t('welcome.title')}
                    </h1>
                </div>
                <AuctionList/>
                <footer className="container-fluid text-center">
                    <p>Online Store Copyright</p>
                    <form className="form-inline">Get deals:
                        <input className="form-control" size={50} placeholder="Email Address" type="email" />
                        <button type="button" className="btn btn-danger">Sign Up</button>
                    </form>
                </footer>
            </div>
        );
    }

}

export default translate('common')(App);
// export default App;