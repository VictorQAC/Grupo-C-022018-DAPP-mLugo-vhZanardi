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
                priceInit: undefined
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.auction);
        axios.post('http://localhost:3000/api/auctionCreate',this.state.auction);
        /*fetch('http://localhost:3000/api/auctionCreate', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.auction)
        });*/
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

                    <button>Create Aution</button>
                </form>
            </Popup>
        );
    }
}


export default AuctionCreate;
