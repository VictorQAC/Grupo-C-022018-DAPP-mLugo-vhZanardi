import * as React from 'react';

import './AuctionList.css';
import axios from 'axios';
import Popup from "reactjs-popup";
import AuctionEdit from './AuctionEdit';
import { translate, Trans } from 'react-i18next'

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

        fetch('http://localhost:3000/api/auctionList')
            .then(response => response.json())
            .then(data => this.setState({auctions: data, isLoading: false}));
    }

    delete(id){
        console.log(id);
        axios.delete('http://localhost:3000/api/auctionDelete/'+id);
    }

    render() {

        const {auctions, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <div class="items">
                    {auctions.map((auction) =>
                        <div key={auction.id}>
                            <div className="col-xs-10 col-sm-6 col-md-4 product">
                                <img src={auction.pictures} alt={auction.title}/>
                                <h3>{auction.title}</h3>
                                <p><Trans i18nKey='button.price'>Price</Trans> {": " + auction.priceInit}</p>
                                <Popup trigger={<button> <Trans i18nKey="button.removeAuction">Remove Auction</Trans> </button>} position="right center">

                                    <Trans i18nKey='auction.text'><label htmlFor="description">You are sure you want to delete the auction?</label></Trans>

                                    <button onClick={this.delete.bind(this, auction.id)}
                                            className="btn btn-danger">
                                        <Trans i18nKey='auction.yes'>Yes</Trans>
                                    </button>

                                </Popup>
                                <br/>
                                <AuctionEdit id={auction.id}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default translate('common')(AuctionList);
//export default AuctionList;