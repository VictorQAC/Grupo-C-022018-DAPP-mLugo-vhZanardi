import * as React from 'react';
import './App.css';
import AuctionCreate from './AuctionCreate';
import AuctionList from './AuctionList';

import logo from './logo_subastas.png';

class App extends React.Component<{}, any> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Subastas Locas Papai !!!</h1>
                </header>
                <AuctionCreate/>
                <AuctionList/>
            </div>
        );
    }
}

export default App;
