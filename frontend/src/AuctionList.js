import * as React from 'react';

import './AuctionList.css';

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
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default AuctionList;