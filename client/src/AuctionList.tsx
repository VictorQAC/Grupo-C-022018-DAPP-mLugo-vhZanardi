import * as React from 'react';
import './AuctionList.css';

interface Auction {
    id: number;
    title: string;
    description: string,
    priceInit: number,
    pictures: string
}

interface AuctionListProps {
}

interface AuctionListState  {
    auctions: Array<Auction>;
    isLoading: boolean;
}

class AuctionList extends React.Component<AuctionListProps, AuctionListState> {

    constructor(props: AuctionListState) {
        super(props);

        this.state = {
            auctions: [],
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8080/auctionList')
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
                <div className="row center-xs">
                {auctions.map((auction: Auction) =>
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