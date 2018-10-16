import * as React from 'react';
import axios from "axios/index";
import Popup from "reactjs-popup";
import {Trans} from "react-i18next";

class AuctionEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            auction: {},
            id: this.props.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        fetch('http://localhost:3000/api/auctionBy/'+this.state.id)
            .then(response => response.json())
            .then(data => this.setState({auction: data}));

    }

    updateState = (name,event) => {
        let newAuction = Object.assign({},this.state.auction);
        newAuction[name] = event.target.value;
        this.setState({auction:newAuction});
    };

    handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:3000/api/auctionUpdate/'+this.state.id,this.state.auction);
    }

    render() {

        return (
            <Popup trigger={<button><Trans i18nKey="button.editAuction">Edit</Trans> </button>} position="right center">

                <form onSubmit={this.handleSubmit}>

                    <Trans i18nKey="auction.titleAuction"><label htmlFor="title">Title</label></Trans>
                    <input id="title" name="title" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>

                    <Trans i18nKey ="auction.descriptionAuction"><label htmlFor="description">Description</label></Trans>
                    <input id="description" name="description" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>

                    <Trans i18nKey = "auction.priceAuction"> <label htmlFor="priceInit">Price Init</label></Trans>
                    <input id="priceInit" name="priceInit" value={this.state.auction.priceInit} type="number" onChange={this.updateState.bind(this,'priceInit')} />

                    <Trans i18nKey = "auction.url"> <label htmlFor="picture">Photo Url</label></Trans>
                    <input id="picture" name="picture" value={this.state.auction.pictures} type="text" onChange={this.updateState.bind(this,'picture')} />

                    <button><Trans i18nKey='button.edit'>Edit Auction</Trans></button>

                </form>

            </Popup>
        );
    }
}
export default AuctionEdit;