import * as React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";


class AuctionCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auction:{
                title:undefined,
                description: undefined,
                priceInit: undefined,
                picture: undefined
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/api/auctionCreate',this.state.auction);
    }

    updateState = (name,event) => {
        let newAuction = Object.assign({},this.state.auction);
        newAuction[name] = event.target.value;
        this.setState({auction:newAuction});
    };

    render() {
        return (
            <Popup trigger={<button> New Auction?</button>} position="right center">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>

                    <label htmlFor="description">Description</label>
                    <input id="description" name="description" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>

                    <label htmlFor="priceInit">Price Init</label>
                    <input id="priceInit" name="priceInit" value={this.state.auction.priceInit} type="number" onChange={this.updateState.bind(this,'priceInit')} />

                    <label htmlFor="picture">Photo Url</label>
                    <input id="picture" name="picture" value={this.state.auction.picture} type="text" onChange={this.updateState.bind(this,'picture')} />

                    <button>Create Aution</button>
                </form>
            </Popup>
        );
    }
}


export default AuctionCreate;
