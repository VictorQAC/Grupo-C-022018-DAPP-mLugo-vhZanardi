import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.css';
import AuctionList from './AuctionList';
import AuctionCreate from './AuctionCreate';
import { translate, Trans } from 'react-i18next'

class App extends Component {
    render() {
        const {t, i18n} = this.props;
        return (
            <header className="App-header">
                <div className="App">
                  <div style={{marginLeft:1220}}>
                    <button onClick={() => i18n.changeLanguage('es')} style={{backgroundColor:"#1fc7ff",marginTop:0,marginRight:10}}>Español
                    </button>
                      <button className="Button-style" onClick={() => i18n.changeLanguage('en')} style={{backgroundColor:"#1fc7ff",marginTop:0}}>English
                      </button>
                  </div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">
                        {this.props.t('welcome.title', {framework: "react-i18next"})}
                    </h1>
                    <p>
                        <Trans i18nKey='welcome.intro'>
                            Edit <code>src/App.js</code> and save to reload.
                        </Trans>
                    </p>
                    <a
                        clasReactsName="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
                <AuctionCreate/>
                <br/>
                <AuctionList/>
            </header>
        );

    }
}

export default translate('common')(App);
// export default App;