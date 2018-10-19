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
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content />
                <meta name="author" content />
                <title>Auctions On Line!</title>
                {/* Bootstrap core CSS */}
                <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                {/* Custom styles for this template */}
                <link href="css/shop-item.css" rel="stylesheet" />
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">{this.props.t('welcome.title', "")}</a>
                        <img src={logo} className="App-logo" alt="logo"/>
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
                                    <button className="nav-link" onClick={() => i18n.changeLanguage('es')} style={{backgroundColor:"#6fc7aa"}}>Español
                                    </button>
                               </li>
                               <li className="nav-item">
                                   <button className="nav-link" onClick={() => i18n.changeLanguage('en')} style={{backgroundColor:"#6fc7aa"}}>English
                                   </button>
                               </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Page Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="my-4">
                                <Trans i18nKey='welcome.intro'>
                                    Auctions Online
                                </Trans>
                            </h1>
                            <div className="list-group">
                                <a href="#" className="list-group-item active">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                            </div>
                        </div>
                        {/* /.col-lg-3 */}
                        <div className="col-lg-9">
                            <div className="card mt-4">
                                <img className="card-img-top img-fluid" src="http://placehold.it/900x400" alt />
                                <div className="card-body">
                                    <h3 className="card-title">Product Name</h3>
                                    <h4>$24.99</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                                    <span className="text-warning">★ ★ ★ ★ ☆</span>
                                    4.0 stars
                                </div>
                            </div>
                            {/* /.card */}
                            <div className="card card-outline-secondary my-4">
                                <div className="card-header">
                                    Product Reviews
                                </div>
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                                    <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                                    <hr />
                                    <a href="#" className="btn btn-success">Leave a Review</a>
                                </div>
                            </div>
                            {/* /.card */}
                        </div>
                        {/* /.col-lg-9 */}
                    </div>
                </div>
                {/* /.container */}
                {/* Footer */}
                <footer className="py-5 bg-dark">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright © Your Website 2017</p>
                    </div>
                    {/* /.container */}
                </footer>
                {/* Bootstrap core JavaScript */}
                <script src="/jquery/jquery.min.js"></script>
                <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
            </div>
        );
    }
}

export default translate('common')(App);
// export default App;