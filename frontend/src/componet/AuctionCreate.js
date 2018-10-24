import * as React from 'react';
import axios from 'axios';
import Popup from "reactjs-popup";
import { translate, Trans } from 'react-i18next'

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
                <form onSubmit={this.handleSubmit}>
                    <Trans i18nKey="auction.titleAuction"><label htmlFor="title">Title</label></Trans>
                    <input id="title" name="title" type="text" value={this.state.auction.title} onChange={this.updateState.bind(this,'title')}/>
                    <br/>

                    <Trans i18nKey ="auction.descriptionAuction"><label htmlFor="description">Description</label></Trans>
                    <input id="description" name="description" value={this.state.auction.description} type="text"  onChange={this.updateState.bind(this,'description')}/>
                    <br/>

                    <Trans i18nKey = "auction.priceAuction"> <label htmlFor="priceInit">Price Init</label></Trans>
                    <input id="priceInit" name="priceInit" value={this.state.auction.priceInit} type="number" onChange={this.updateState.bind(this,'priceInit')} />
                    <br/>

                    <Trans i18nKey = "auction.url"><label htmlFor="picture">Photo Url</label></Trans>
                    <input id="picture" name="picture" value={this.state.auction.picture} type="text" onChange={this.updateState.bind(this,'picture')} />
                    <br/>

                    <button><Trans i18nKey='button.createAuction'>Create Auction</Trans></button>
                </form>
        );
    }
}

export default translate('common')(AuctionCreate);
//export default AuctionCreate;
