import React, { Component } from 'react';
import logo from './logo_subastas.png';
import './App.css';
import './Button.css';
import AuctionList from './componet/AuctionList';
import AuctionCreate from './componet/AuctionCreate';
import { translate, Trans } from 'react-i18next'

class App extends Component {
    render() {
        const {t, i18n} = this.props;
        return (
                <div className="App">
                    <header className="App-header">
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
                    </header>
                    <AuctionCreate/>
                    <br/>
                    <br/>
                    <AuctionList/>
                </div>
        );

    }
}

export default translate('common')(App);
// export default App;