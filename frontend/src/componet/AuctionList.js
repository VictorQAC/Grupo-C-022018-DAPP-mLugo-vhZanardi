import * as React from 'react';

import './AuctionList.css';
import axios from 'axios';
import Popup from "reactjs-popup";
import AuctionEdit from './AuctionEdit';
import { translate, Trans } from 'react-i18next'
import Button from "bootstrap/js/src/button";
import AuctionDetail from './AuctionDetail';
import {Link} from 'react-router-dom';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + "http://simpleauctionsite.com/images/slide1.jpg" + ")"
};

class AuctionList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            auctions: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/auctionList')
            .then(response => response.json())
            .then(data => this.setState({auctions: data, isLoading: false}));
    }

    delete(id){
        axios.delete('/api/auctionDelete/'+id);
    }

    render() {

        const {auctions, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
                <div>
                    <header className="jumbotron my-4" style={sectionStyle}>
                        <h1 className="display-3" style={{color:"white"}}>
                            {this.props.t('welcome.title')}</h1>
                        <p className="lead" style={{color:"lightblue"}}>
                            <Trans i18nKey='welcome.intro'>intro</Trans>
                        </p>
                        <Link to= {"/auctionCreate"} className="btn btn-primary"><Trans i18nKey="button.createAuction">Create Auction</Trans></Link>
                    </header>

                    <div className="row text-center">
                    {auctions.map((auction) =>
                                <div className="col-lg-3 col-md-6 mb-4" key={auction.id}>
                                    <div className="card">
                                            <img className="card-img-top" src={auction.pictures}  alt=""/>
                                            <div className="card-body">
                                                <h4 className="card-title">{auction.title}</h4>
                                                <p className="card-text">{auction.description}</p>
                                                <p className="card-text"><p><Trans i18nKey='button.price'>Price</Trans> {": " + auction.priceInit}</p></p>
                                            </div>
                                            <div className="card-footer">
                                                <AuctionEdit id={auction.id}/>
                                                <Popup trigger={<button className="btn btn-primary"> <Trans i18nKey="button.removeAuction">Remove Auction</Trans> </button>} position="right center">
                                                    <Trans i18nKey='auction.text'><label htmlFor="description">You are sure you want to delete the auction?</label></Trans>
                                                    <button onClick={this.delete.bind(this, auction.id)}
                                                            className="btn btn-danger">
                                                        <Trans i18nKey='auction.yes'>Yes</Trans>
                                                    </button>
                                                </Popup>
                                            </div>
                                        <Link to= {"/auctionDetail/" + auction.id} className="btn btn-primary"><Trans i18nKey="button.detail">Detail</Trans></Link>
                                    </div>
                                </div>
                            )}
                        </div>
                </div>
        );
    }
}


export default translate('common')(AuctionList);
//export default AuctionList;)
