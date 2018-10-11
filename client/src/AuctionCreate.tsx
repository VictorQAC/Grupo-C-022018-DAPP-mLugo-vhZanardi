import * as React from 'react';

interface AuctionCreateProps {
}

interface AuctionCreateState  {
    isLoading: boolean;
}

class AuctionCreate extends React.Component<AuctionCreateProps, AuctionCreateState> {

    constructor(props: AuctionCreateState) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event : any){
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:8080/auctionCreate', {
            method: 'post',
            body: data
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Enter Title</label>
                <input id="title" name="title" type="text" />

                <label htmlFor="description">Enter Description</label>
                <input id="description" name="description" type="text" />

                <label htmlFor="priceInit">Enter Price Intit</label>
                <input id="priceInit" name="priceInit" type="text" />

                <button>Send data!</button>
            </form>
        );
    }
}


export default AuctionCreate;
