import * as React from 'react';

import './AuctionList.css';
import axios from 'axios';
import Popup from "reactjs-popup";

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
                                <p>{"Precio:" + auction.priceInit}</p>

                                <Popup trigger={<button> Remove Auction </button>} position="right center">

                                    <label htmlFor="description">You are sure you want to delete the auction?</label>

                                    <button onClick={this.delete.bind(this, auction.id)}
                                            className="btn btn-danger">Yes
                                    </button>

                                </Popup>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AuctionList;